import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqk")
export default class MqkController {
  @operation({
    summary: "Get Mqk",
  })
  @get()
  static getMqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqk",
  })
  @post("{id}")
  static createMqk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
