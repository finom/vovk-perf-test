import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdi")
export default class JdiController {
  @operation({
    summary: "Get Jdi",
  })
  @get()
  static getJdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdi",
  })
  @post("{id}")
  static createJdi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
