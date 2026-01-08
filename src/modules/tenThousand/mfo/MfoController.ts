import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfo")
export default class MfoController {
  @operation({
    summary: "Get Mfo",
  })
  @get()
  static getMfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfo",
  })
  @post("{id}")
  static createMfo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
