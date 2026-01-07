import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jeu")
export default class JeuController {
  @operation({
    summary: "Get Jeu",
  })
  @get()
  static getJeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jeu",
  })
  @post("{id}")
  static createJeu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
