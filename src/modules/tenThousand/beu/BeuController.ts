import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("beus")
export default class BeuController {
  @operation({
    summary: "Get Beus",
  })
  @get()
  static getBeus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Beu",
  })
  @post("{id}")
  static createBeu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
