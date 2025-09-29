import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evrs")
export default class EvrController {
  @operation({
    summary: "Get Evrs",
  })
  @get()
  static getEvrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evr",
  })
  @post("{id}")
  static createEvr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
