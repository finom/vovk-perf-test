import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wps")
export default class WpController {
  @operation({
    summary: "Get Wps",
  })
  @get()
  static getWps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wp",
  })
  @post("{id}")
  static createWp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
