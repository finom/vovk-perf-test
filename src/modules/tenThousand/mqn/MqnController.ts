import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqn")
export default class MqnController {
  @operation({
    summary: "Get Mqn",
  })
  @get()
  static getMqn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mqn",
  })
  @post("{id}")
  static createMqn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
