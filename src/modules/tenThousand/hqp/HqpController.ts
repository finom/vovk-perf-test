import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqp")
export default class HqpController {
  @operation({
    summary: "Get Hqp",
  })
  @get()
  static getHqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqp",
  })
  @post("{id}")
  static createHqp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
