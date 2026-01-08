import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ma")
export default class MaController {
  @operation({
    summary: "Get Ma",
  })
  @get()
  static getMa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ma",
  })
  @post("{id}")
  static createMa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
