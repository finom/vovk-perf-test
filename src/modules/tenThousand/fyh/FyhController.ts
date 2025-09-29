import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyhs")
export default class FyhController {
  @operation({
    summary: "Get Fyhs",
  })
  @get()
  static getFyhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyh",
  })
  @post("{id}")
  static createFyh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
