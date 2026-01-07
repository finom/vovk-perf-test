import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpn")
export default class MpnController {
  @operation({
    summary: "Get Mpn",
  })
  @get()
  static getMpn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpn",
  })
  @post("{id}")
  static createMpn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
