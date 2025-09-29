import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyus")
export default class FyuController {
  @operation({
    summary: "Get Fyus",
  })
  @get()
  static getFyus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyu",
  })
  @post("{id}")
  static createFyu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
