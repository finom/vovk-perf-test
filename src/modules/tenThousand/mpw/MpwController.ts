import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpw")
export default class MpwController {
  @operation({
    summary: "Get Mpw",
  })
  @get()
  static getMpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpw",
  })
  @post("{id}")
  static createMpw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
