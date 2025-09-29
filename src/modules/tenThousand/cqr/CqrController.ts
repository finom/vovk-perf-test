import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqrs")
export default class CqrController {
  @operation({
    summary: "Get Cqrs",
  })
  @get()
  static getCqrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqr",
  })
  @post("{id}")
  static createCqr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
