import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqp")
export default class DqpController {
  @operation({
    summary: "Get Dqp",
  })
  @get()
  static getDqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqp",
  })
  @post("{id}")
  static createDqp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
