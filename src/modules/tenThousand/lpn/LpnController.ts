import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpns")
export default class LpnController {
  @operation({
    summary: "Get Lpns",
  })
  @get()
  static getLpns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpn",
  })
  @post("{id}")
  static createLpn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
