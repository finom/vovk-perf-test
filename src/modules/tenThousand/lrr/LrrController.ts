import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrr")
export default class LrrController {
  @operation({
    summary: "Get Lrr",
  })
  @get()
  static getLrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrr",
  })
  @post("{id}")
  static createLrr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
