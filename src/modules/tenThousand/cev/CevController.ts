import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cevs")
export default class CevController {
  @operation({
    summary: "Get Cevs",
  })
  @get()
  static getCevs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cev",
  })
  @post("{id}")
  static createCev = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
