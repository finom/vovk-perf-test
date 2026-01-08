import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqe")
export default class MqeController {
  @operation({
    summary: "Get Mqe",
  })
  @get()
  static getMqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqe",
  })
  @post("{id}")
  static createMqe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
