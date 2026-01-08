import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfv")
export default class MfvController {
  @operation({
    summary: "Get Mfv",
  })
  @get()
  static getMfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfv",
  })
  @post("{id}")
  static createMfv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
