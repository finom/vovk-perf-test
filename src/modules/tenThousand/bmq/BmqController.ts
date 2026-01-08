import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmq")
export default class BmqController {
  @operation({
    summary: "Get Bmq",
  })
  @get()
  static getBmq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmq",
  })
  @post("{id}")
  static createBmq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
