import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdi")
export default class MdiController {
  @operation({
    summary: "Get Mdi",
  })
  @get()
  static getMdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdi",
  })
  @post("{id}")
  static createMdi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
