import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epns")
export default class EpnController {
  @operation({
    summary: "Get Epns",
  })
  @get()
  static getEpns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epn",
  })
  @post("{id}")
  static createEpn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
