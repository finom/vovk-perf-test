import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ous")
export default class OuController {
  @operation({
    summary: "Get Ous",
  })
  @get()
  static getOus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ou",
  })
  @post("{id}")
  static createOu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
