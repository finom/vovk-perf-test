import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgps")
export default class KgpController {
  @operation({
    summary: "Get Kgps",
  })
  @get()
  static getKgps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgp",
  })
  @post("{id}")
  static createKgp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
