import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kals")
export default class KalController {
  @operation({
    summary: "Get Kals",
  })
  @get()
  static getKals = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kal",
  })
  @post("{id}")
  static createKal = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
