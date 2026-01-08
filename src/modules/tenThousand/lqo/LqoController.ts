import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqo")
export default class LqoController {
  @operation({
    summary: "Get Lqo",
  })
  @get()
  static getLqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqo",
  })
  @post("{id}")
  static createLqo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
