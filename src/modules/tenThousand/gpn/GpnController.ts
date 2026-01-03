import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpns")
export default class GpnController {
  @operation({
    summary: "Get Gpns",
  })
  @get()
  static getGpns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpn",
  })
  @post("{id}")
  static createGpn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
