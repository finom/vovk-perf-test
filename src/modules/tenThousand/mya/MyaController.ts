import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myas")
export default class MyaController {
  @operation({
    summary: "Get Myas",
  })
  @get()
  static getMyas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mya",
  })
  @post("{id}")
  static createMya = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
