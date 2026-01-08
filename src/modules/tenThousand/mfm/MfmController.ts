import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfm")
export default class MfmController {
  @operation({
    summary: "Get Mfm",
  })
  @get()
  static getMfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfm",
  })
  @post("{id}")
  static createMfm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
