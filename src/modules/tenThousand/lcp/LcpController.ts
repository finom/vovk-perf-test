import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcp")
export default class LcpController {
  @operation({
    summary: "Get Lcp",
  })
  @get()
  static getLcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lcp",
  })
  @post("{id}")
  static createLcp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
