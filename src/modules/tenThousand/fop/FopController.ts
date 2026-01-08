import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fop")
export default class FopController {
  @operation({
    summary: "Get Fop",
  })
  @get()
  static getFop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fop",
  })
  @post("{id}")
  static createFop = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
