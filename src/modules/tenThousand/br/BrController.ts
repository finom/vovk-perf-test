import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brs")
export default class BrController {
  @operation({
    summary: "Get Brs",
  })
  @get()
  static getBrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Br",
  })
  @post("{id}")
  static createBr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
