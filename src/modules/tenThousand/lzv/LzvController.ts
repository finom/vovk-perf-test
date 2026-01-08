import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzv")
export default class LzvController {
  @operation({
    summary: "Get Lzv",
  })
  @get()
  static getLzv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzv",
  })
  @post("{id}")
  static createLzv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
