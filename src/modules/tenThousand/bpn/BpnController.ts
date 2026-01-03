import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpns")
export default class BpnController {
  @operation({
    summary: "Get Bpns",
  })
  @get()
  static getBpns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpn",
  })
  @post("{id}")
  static createBpn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
