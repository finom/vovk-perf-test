import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqy")
export default class MqyController {
  @operation({
    summary: "Get Mqy",
  })
  @get()
  static getMqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqy",
  })
  @post("{id}")
  static createMqy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
