import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("moh")
export default class MohController {
  @operation({
    summary: "Get Moh",
  })
  @get()
  static getMoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Moh",
  })
  @post("{id}")
  static createMoh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
