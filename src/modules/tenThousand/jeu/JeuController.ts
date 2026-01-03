import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jeus")
export default class JeuController {
  @operation({
    summary: "Get Jeus",
  })
  @get()
  static getJeus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jeu",
  })
  @post("{id}")
  static createJeu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
