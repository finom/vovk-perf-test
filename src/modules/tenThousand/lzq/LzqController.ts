import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzq")
export default class LzqController {
  @operation({
    summary: "Get Lzq",
  })
  @get()
  static getLzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzq",
  })
  @post("{id}")
  static createLzq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
