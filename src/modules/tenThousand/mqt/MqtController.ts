import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqt")
export default class MqtController {
  @operation({
    summary: "Get Mqt",
  })
  @get()
  static getMqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqt",
  })
  @post("{id}")
  static createMqt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
