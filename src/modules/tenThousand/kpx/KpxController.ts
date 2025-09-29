import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpxes")
export default class KpxController {
  @operation({
    summary: "Get Kpxes",
  })
  @get()
  static getKpxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpx",
  })
  @post("{id}")
  static createKpx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
