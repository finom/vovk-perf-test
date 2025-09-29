import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eijs")
export default class EijController {
  @operation({
    summary: "Get Eijs",
  })
  @get()
  static getEijs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eij",
  })
  @post("{id}")
  static createEij = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
