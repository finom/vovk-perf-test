import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpb")
export default class MpbController {
  @operation({
    summary: "Get Mpb",
  })
  @get()
  static getMpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpb",
  })
  @post("{id}")
  static createMpb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
