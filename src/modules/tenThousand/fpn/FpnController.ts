import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpns")
export default class FpnController {
  @operation({
    summary: "Get Fpns",
  })
  @get()
  static getFpns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpn",
  })
  @post("{id}")
  static createFpn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
