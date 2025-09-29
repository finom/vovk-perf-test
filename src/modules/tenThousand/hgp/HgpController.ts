import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgps")
export default class HgpController {
  @operation({
    summary: "Get Hgps",
  })
  @get()
  static getHgps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgp",
  })
  @post("{id}")
  static createHgp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
