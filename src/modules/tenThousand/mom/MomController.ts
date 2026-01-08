import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mom")
export default class MomController {
  @operation({
    summary: "Get Mom",
  })
  @get()
  static getMom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mom",
  })
  @post("{id}")
  static createMom = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
