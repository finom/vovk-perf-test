import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqp")
export default class JqpController {
  @operation({
    summary: "Get Jqp",
  })
  @get()
  static getJqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqp",
  })
  @post("{id}")
  static createJqp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
