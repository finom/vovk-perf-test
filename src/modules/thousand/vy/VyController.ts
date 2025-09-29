import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vies")
export default class VyController {
  @operation({
    summary: "Get Vies",
  })
  @get()
  static getVies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vy",
  })
  @post("{id}")
  static createVy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
