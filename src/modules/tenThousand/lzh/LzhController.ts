import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzh")
export default class LzhController {
  @operation({
    summary: "Get Lzh",
  })
  @get()
  static getLzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzh",
  })
  @post("{id}")
  static createLzh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
