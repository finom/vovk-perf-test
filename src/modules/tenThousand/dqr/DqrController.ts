import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqrs")
export default class DqrController {
  @operation({
    summary: "Get Dqrs",
  })
  @get()
  static getDqrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqr",
  })
  @post("{id}")
  static createDqr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
