import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbh")
export default class FbhController {
  @operation({
    summary: "Get Fbh",
  })
  @get()
  static getFbh = procedure({
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
