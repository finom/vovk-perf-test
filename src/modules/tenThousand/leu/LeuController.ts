import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("leu")
export default class LeuController {
  @operation({
    summary: "Get Leu",
  })
  @get()
  static getLeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Leu",
  })
  @post("{id}")
  static createLeu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
