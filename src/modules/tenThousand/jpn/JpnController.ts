import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpns")
export default class JpnController {
  @operation({
    summary: "Get Jpns",
  })
  @get()
  static getJpns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpn",
  })
  @post("{id}")
  static createJpn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
