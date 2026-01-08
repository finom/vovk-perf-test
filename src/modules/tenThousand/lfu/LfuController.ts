import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfu")
export default class LfuController {
  @operation({
    summary: "Get Lfu",
  })
  @get()
  static getLfu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfu",
  })
  @post("{id}")
  static createLfu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
