import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdr")
export default class HdrController {
  @operation({
    summary: "Get Hdr",
  })
  @get()
  static getHdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdr",
  })
  @post("{id}")
  static createHdr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
