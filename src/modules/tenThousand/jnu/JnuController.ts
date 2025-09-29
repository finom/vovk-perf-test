import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnus")
export default class JnuController {
  @operation({
    summary: "Get Jnus",
  })
  @get()
  static getJnus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnu",
  })
  @post("{id}")
  static createJnu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
