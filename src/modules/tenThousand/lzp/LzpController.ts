import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzp")
export default class LzpController {
  @operation({
    summary: "Get Lzp",
  })
  @get()
  static getLzp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzp",
  })
  @post("{id}")
  static createLzp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
