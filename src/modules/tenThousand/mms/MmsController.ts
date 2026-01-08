import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mms")
export default class MmsController {
  @operation({
    summary: "Get Mms",
  })
  @get()
  static getMms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mms",
  })
  @post("{id}")
  static createMms = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
