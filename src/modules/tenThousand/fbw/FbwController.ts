import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbw")
export default class FbwController {
  @operation({
    summary: "Get Fbw",
  })
  @get()
  static getFbw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbw",
  })
  @post("{id}")
  static createFbw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
