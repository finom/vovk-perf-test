import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpn")
export default class BpnController {
  @operation({
    summary: "Get Bpn",
  })
  @get()
  static getBpn = procedure({
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
