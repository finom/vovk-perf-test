import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqr")
export default class MqrController {
  @operation({
    summary: "Get Mqr",
  })
  @get()
  static getMqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqr",
  })
  @post("{id}")
  static createMqr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
