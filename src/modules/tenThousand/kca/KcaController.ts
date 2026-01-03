import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcas")
export default class KcaController {
  @operation({
    summary: "Get Kcas",
  })
  @get()
  static getKcas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kca",
  })
  @post("{id}")
  static createKca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
