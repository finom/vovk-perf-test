import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfb")
export default class MfbController {
  @operation({
    summary: "Get Mfb",
  })
  @get()
  static getMfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfb",
  })
  @post("{id}")
  static createMfb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
