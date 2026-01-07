import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpn")
export default class KpnController {
  @operation({
    summary: "Get Kpn",
  })
  @get()
  static getKpn = procedure({
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
