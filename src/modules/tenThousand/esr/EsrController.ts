import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esrs")
export default class EsrController {
  @operation({
    summary: "Get Esrs",
  })
  @get()
  static getEsrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esr",
  })
  @post("{id}")
  static createEsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
