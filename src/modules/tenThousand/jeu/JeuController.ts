import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jeu")
export default class JeuController {
  @operation({
    summary: "Get Jeu",
  })
  @get()
  static getJeu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jeu",
  })
  @post("{id}")
  static createJeu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
