import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnas")
export default class MnaController {
  @operation({
    summary: "Get Mnas",
  })
  @get()
  static getMnas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mna",
  })
  @post("{id}")
  static createMna = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
