import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqs")
export default class MqsController {
  @operation({
    summary: "Get Mqs",
  })
  @get()
  static getMqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqs",
  })
  @post("{id}")
  static createMqs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
