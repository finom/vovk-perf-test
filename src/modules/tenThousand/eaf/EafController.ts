import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaves")
export default class EafController {
  @operation({
    summary: "Get Eaves",
  })
  @get()
  static getEaves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eaf",
  })
  @post("{id}")
  static createEaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
