import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esa")
export default class EsaController {
  @operation({
    summary: "Get Esa",
  })
  @get()
  static getEsa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esa",
  })
  @post("{id}")
  static createEsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
