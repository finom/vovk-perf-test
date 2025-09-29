import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kots")
export default class KotController {
  @operation({
    summary: "Get Kots",
  })
  @get()
  static getKots = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kot",
  })
  @post("{id}")
  static createKot = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
