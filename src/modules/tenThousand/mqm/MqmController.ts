import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqm")
export default class MqmController {
  @operation({
    summary: "Get Mqm",
  })
  @get()
  static getMqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqm",
  })
  @post("{id}")
  static createMqm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
