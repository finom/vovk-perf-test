import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luj")
export default class LujController {
  @operation({
    summary: "Get Luj",
  })
  @get()
  static getLuj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luj",
  })
  @post("{id}")
  static createLuj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
