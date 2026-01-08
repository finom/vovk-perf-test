import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsz")
export default class LszController {
  @operation({
    summary: "Get Lsz",
  })
  @get()
  static getLsz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsz",
  })
  @post("{id}")
  static createLsz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
