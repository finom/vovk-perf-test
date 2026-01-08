import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lav")
export default class LavController {
  @operation({
    summary: "Get Lav",
  })
  @get()
  static getLav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lav",
  })
  @post("{id}")
  static createLav = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
