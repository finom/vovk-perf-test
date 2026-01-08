import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mha")
export default class MhaController {
  @operation({
    summary: "Get Mha",
  })
  @get()
  static getMha = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mha",
  })
  @post("{id}")
  static createMha = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
