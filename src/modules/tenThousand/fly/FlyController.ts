import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flies")
export default class FlyController {
  @operation({
    summary: "Get Flies",
  })
  @get()
  static getFlies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fly",
  })
  @post("{id}")
  static createFly = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
