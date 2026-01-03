import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpns")
export default class JpnController {
  @operation({
    summary: "Get Jpns",
  })
  @get()
  static getJpns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpn",
  })
  @post("{id}")
  static createJpn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
