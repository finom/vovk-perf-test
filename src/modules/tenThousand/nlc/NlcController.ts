import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlc")
export default class NlcController {
  @operation({
    summary: "Get Nlc",
  })
  @get()
  static getNlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlc",
  })
  @post("{id}")
  static createNlc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
