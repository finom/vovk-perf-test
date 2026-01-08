import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdi")
export default class BdiController {
  @operation({
    summary: "Get Bdi",
  })
  @get()
  static getBdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdi",
  })
  @post("{id}")
  static createBdi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
