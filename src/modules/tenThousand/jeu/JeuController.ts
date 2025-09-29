import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jeus")
export default class JeuController {
  @operation({
    summary: "Get Jeus",
  })
  @get()
  static getJeus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jeu",
  })
  @post("{id}")
  static createJeu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
