import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fibs")
export default class FibController {
  @operation({
    summary: "Get Fibs",
  })
  @get()
  static getFibs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fib",
  })
  @post("{id}")
  static createFib = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
