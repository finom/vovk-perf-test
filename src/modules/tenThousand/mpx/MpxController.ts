import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpx")
export default class MpxController {
  @operation({
    summary: "Get Mpx",
  })
  @get()
  static getMpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpx",
  })
  @post("{id}")
  static createMpx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
