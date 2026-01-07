import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ing")
export default class IngController {
  @operation({
    summary: "Get Ing",
  })
  @get()
  static getIng = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ing",
  })
  @post("{id}")
  static createIng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
