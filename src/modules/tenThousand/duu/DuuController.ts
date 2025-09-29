import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duus")
export default class DuuController {
  @operation({
    summary: "Get Duus",
  })
  @get()
  static getDuus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Duu",
  })
  @post("{id}")
  static createDuu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
