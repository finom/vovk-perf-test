import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nels")
export default class NelController {
  @operation({
    summary: "Get Nels",
  })
  @get()
  static getNels = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nel",
  })
  @post("{id}")
  static createNel = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
