import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzk")
export default class LzkController {
  @operation({
    summary: "Get Lzk",
  })
  @get()
  static getLzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzk",
  })
  @post("{id}")
  static createLzk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
