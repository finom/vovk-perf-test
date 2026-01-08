import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqc")
export default class MqcController {
  @operation({
    summary: "Get Mqc",
  })
  @get()
  static getMqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqc",
  })
  @post("{id}")
  static createMqc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
