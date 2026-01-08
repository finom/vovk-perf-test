import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mks")
export default class MksController {
  @operation({
    summary: "Get Mks",
  })
  @get()
  static getMks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mks",
  })
  @post("{id}")
  static createMks = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
