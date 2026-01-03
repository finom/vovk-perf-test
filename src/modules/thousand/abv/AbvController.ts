import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abvs")
export default class AbvController {
  @operation({
    summary: "Get Abvs",
  })
  @get()
  static getAbvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abv",
  })
  @post("{id}")
  static createAbv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
