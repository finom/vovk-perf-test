import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etq")
export default class EtqController {
  @operation({
    summary: "Get Etq",
  })
  @get()
  static getEtq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etq",
  })
  @post("{id}")
  static createEtq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
