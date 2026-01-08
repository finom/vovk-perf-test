import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("meu")
export default class MeuController {
  @operation({
    summary: "Get Meu",
  })
  @get()
  static getMeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Meu",
  })
  @post("{id}")
  static createMeu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
