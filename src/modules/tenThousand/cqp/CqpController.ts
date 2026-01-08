import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqp")
export default class CqpController {
  @operation({
    summary: "Get Cqp",
  })
  @get()
  static getCqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqp",
  })
  @post("{id}")
  static createCqp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
