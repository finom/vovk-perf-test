import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbies")
export default class KbyController {
  @operation({
    summary: "Get Kbies",
  })
  @get()
  static getKbies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kby",
  })
  @post("{id}")
  static createKby = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
