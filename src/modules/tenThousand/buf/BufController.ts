import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("buf")
export default class BufController {
  @operation({
    summary: "Get Buf",
  })
  @get()
  static getBuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buf",
  })
  @post("{id}")
  static createBuf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
