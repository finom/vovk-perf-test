import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byas")
export default class ByaController {
  @operation({
    summary: "Get Byas",
  })
  @get()
  static getByas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bya",
  })
  @post("{id}")
  static createBya = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
