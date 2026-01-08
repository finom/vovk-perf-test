import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfp")
export default class MfpController {
  @operation({
    summary: "Get Mfp",
  })
  @get()
  static getMfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfp",
  })
  @post("{id}")
  static createMfp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
