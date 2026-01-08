import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzb")
export default class LzbController {
  @operation({
    summary: "Get Lzb",
  })
  @get()
  static getLzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzb",
  })
  @post("{id}")
  static createLzb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
