import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqo")
export default class NqoController {
  @operation({
    summary: "Get Nqo",
  })
  @get()
  static getNqo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqo",
  })
  @post("{id}")
  static createNqo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
