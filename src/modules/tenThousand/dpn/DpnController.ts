import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpn")
export default class DpnController {
  @operation({
    summary: "Get Dpn",
  })
  @get()
  static getDpn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpn",
  })
  @post("{id}")
  static createDpn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
