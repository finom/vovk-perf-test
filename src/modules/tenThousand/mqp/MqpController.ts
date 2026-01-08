import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqp")
export default class MqpController {
  @operation({
    summary: "Get Mqp",
  })
  @get()
  static getMqp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqp",
  })
  @post("{id}")
  static createMqp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
