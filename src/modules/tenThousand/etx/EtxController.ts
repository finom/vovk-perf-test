import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etxes")
export default class EtxController {
  @operation({
    summary: "Get Etxes",
  })
  @get()
  static getEtxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etx",
  })
  @post("{id}")
  static createEtx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
