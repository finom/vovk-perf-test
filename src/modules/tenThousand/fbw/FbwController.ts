import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbws")
export default class FbwController {
  @operation({
    summary: "Get Fbws",
  })
  @get()
  static getFbws = procedure({
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
