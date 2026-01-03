import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auis")
export default class AuiController {
  @operation({
    summary: "Get Auis",
  })
  @get()
  static getAuis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aui",
  })
  @post("{id}")
  static createAui = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
