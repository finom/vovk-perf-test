import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqrs")
export default class BqrController {
  @operation({
    summary: "Get Bqrs",
  })
  @get()
  static getBqrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqr",
  })
  @post("{id}")
  static createBqr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
