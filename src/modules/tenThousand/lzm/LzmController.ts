import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzm")
export default class LzmController {
  @operation({
    summary: "Get Lzm",
  })
  @get()
  static getLzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzm",
  })
  @post("{id}")
  static createLzm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
