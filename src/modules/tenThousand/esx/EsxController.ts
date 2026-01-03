import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esxes")
export default class EsxController {
  @operation({
    summary: "Get Esxes",
  })
  @get()
  static getEsxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esx",
  })
  @post("{id}")
  static createEsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
