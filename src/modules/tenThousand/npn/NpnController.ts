import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npns")
export default class NpnController {
  @operation({
    summary: "Get Npns",
  })
  @get()
  static getNpns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npn",
  })
  @post("{id}")
  static createNpn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
