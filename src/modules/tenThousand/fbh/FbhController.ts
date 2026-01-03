import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbhs")
export default class FbhController {
  @operation({
    summary: "Get Fbhs",
  })
  @get()
  static getFbhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbh",
  })
  @post("{id}")
  static createFbh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
