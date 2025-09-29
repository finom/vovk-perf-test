import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avxes")
export default class AvxController {
  @operation({
    summary: "Get Avxes",
  })
  @get()
  static getAvxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avx",
  })
  @post("{id}")
  static createAvx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
