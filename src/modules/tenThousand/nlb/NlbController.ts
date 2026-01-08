import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlb")
export default class NlbController {
  @operation({
    summary: "Get Nlb",
  })
  @get()
  static getNlb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlb",
  })
  @post("{id}")
  static createNlb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
