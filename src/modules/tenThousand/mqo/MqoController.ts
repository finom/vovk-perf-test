import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqo")
export default class MqoController {
  @operation({
    summary: "Get Mqo",
  })
  @get()
  static getMqo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mqo",
  })
  @post("{id}")
  static createMqo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
