import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqg")
export default class MqgController {
  @operation({
    summary: "Get Mqg",
  })
  @get()
  static getMqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqg",
  })
  @post("{id}")
  static createMqg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
