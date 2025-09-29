import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tqs")
export default class TqController {
  @operation({
    summary: "Get Tqs",
  })
  @get()
  static getTqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tq",
  })
  @post("{id}")
  static createTq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
