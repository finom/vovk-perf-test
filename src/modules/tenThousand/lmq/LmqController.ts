import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmq")
export default class LmqController {
  @operation({
    summary: "Get Lmq",
  })
  @get()
  static getLmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmq",
  })
  @post("{id}")
  static createLmq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
