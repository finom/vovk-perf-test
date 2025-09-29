import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyqs")
export default class FyqController {
  @operation({
    summary: "Get Fyqs",
  })
  @get()
  static getFyqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyq",
  })
  @post("{id}")
  static createFyq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
