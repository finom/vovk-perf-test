import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jeis")
export default class JeiController {
  @operation({
    summary: "Get Jeis",
  })
  @get()
  static getJeis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jei",
  })
  @post("{id}")
  static createJei = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
