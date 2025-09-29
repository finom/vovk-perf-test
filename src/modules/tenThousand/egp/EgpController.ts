import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egps")
export default class EgpController {
  @operation({
    summary: "Get Egps",
  })
  @get()
  static getEgps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egp",
  })
  @post("{id}")
  static createEgp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
