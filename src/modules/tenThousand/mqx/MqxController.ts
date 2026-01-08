import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqx")
export default class MqxController {
  @operation({
    summary: "Get Mqx",
  })
  @get()
  static getMqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqx",
  })
  @post("{id}")
  static createMqx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
