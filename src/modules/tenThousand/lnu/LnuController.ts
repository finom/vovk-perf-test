import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnu")
export default class LnuController {
  @operation({
    summary: "Get Lnu",
  })
  @get()
  static getLnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnu",
  })
  @post("{id}")
  static createLnu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
