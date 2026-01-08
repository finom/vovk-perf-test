import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfq")
export default class MfqController {
  @operation({
    summary: "Get Mfq",
  })
  @get()
  static getMfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfq",
  })
  @post("{id}")
  static createMfq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
