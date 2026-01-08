import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqs")
export default class BqsController {
  @operation({
    summary: "Get Bqs",
  })
  @get()
  static getBqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqs",
  })
  @post("{id}")
  static createBqs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
