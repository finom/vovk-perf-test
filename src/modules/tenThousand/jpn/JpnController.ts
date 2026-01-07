import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpn")
export default class JpnController {
  @operation({
    summary: "Get Jpn",
  })
  @get()
  static getJpn = procedure({
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
