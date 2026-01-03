import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iahs")
export default class IahController {
  @operation({
    summary: "Get Iahs",
  })
  @get()
  static getIahs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iah",
  })
  @post("{id}")
  static createIah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
