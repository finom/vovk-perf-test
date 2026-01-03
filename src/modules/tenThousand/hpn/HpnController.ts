import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpns")
export default class HpnController {
  @operation({
    summary: "Get Hpns",
  })
  @get()
  static getHpns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hpn",
  })
  @post("{id}")
  static createHpn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
