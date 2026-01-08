import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lns")
export default class LnsController {
  @operation({
    summary: "Get Lns",
  })
  @get()
  static getLns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lns",
  })
  @post("{id}")
  static createLns = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
