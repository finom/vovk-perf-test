import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzn")
export default class LznController {
  @operation({
    summary: "Get Lzn",
  })
  @get()
  static getLzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzn",
  })
  @post("{id}")
  static createLzn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
