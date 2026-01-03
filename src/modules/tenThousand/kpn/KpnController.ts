import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpns")
export default class KpnController {
  @operation({
    summary: "Get Kpns",
  })
  @get()
  static getKpns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpn",
  })
  @post("{id}")
  static createKpn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
