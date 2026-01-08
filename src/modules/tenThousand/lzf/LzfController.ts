import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzf")
export default class LzfController {
  @operation({
    summary: "Get Lzf",
  })
  @get()
  static getLzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzf",
  })
  @post("{id}")
  static createLzf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
