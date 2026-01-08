import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("loh")
export default class LohController {
  @operation({
    summary: "Get Loh",
  })
  @get()
  static getLoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loh",
  })
  @post("{id}")
  static createLoh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
