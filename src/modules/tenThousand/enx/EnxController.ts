import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enxes")
export default class EnxController {
  @operation({
    summary: "Get Enxes",
  })
  @get()
  static getEnxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Enx",
  })
  @post("{id}")
  static createEnx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
