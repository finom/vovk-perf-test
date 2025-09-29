import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cls")
export default class ClController {
  @operation({
    summary: "Get Cls",
  })
  @get()
  static getCls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cl",
  })
  @post("{id}")
  static createCl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
