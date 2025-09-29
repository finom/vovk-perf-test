import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buns")
export default class BunController {
  @operation({
    summary: "Get Buns",
  })
  @get()
  static getBuns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bun",
  })
  @post("{id}")
  static createBun = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
