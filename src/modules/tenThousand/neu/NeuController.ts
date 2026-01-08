import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("neu")
export default class NeuController {
  @operation({
    summary: "Get Neu",
  })
  @get()
  static getNeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Neu",
  })
  @post("{id}")
  static createNeu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
