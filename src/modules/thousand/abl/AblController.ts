import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abls")
export default class AblController {
  @operation({
    summary: "Get Abls",
  })
  @get()
  static getAbls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abl",
  })
  @post("{id}")
  static createAbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
