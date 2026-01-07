import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etb")
export default class EtbController {
  @operation({
    summary: "Get Etb",
  })
  @get()
  static getEtb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etb",
  })
  @post("{id}")
  static createEtb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
