import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("men")
export default class MenController {
  @operation({
    summary: "Get Men",
  })
  @get()
  static getMen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Men",
  })
  @post("{id}")
  static createMen = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
