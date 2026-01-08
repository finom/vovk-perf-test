import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzw")
export default class LzwController {
  @operation({
    summary: "Get Lzw",
  })
  @get()
  static getLzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzw",
  })
  @post("{id}")
  static createLzw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
