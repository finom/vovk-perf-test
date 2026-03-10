import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mq")
export default class MqController {
  @operation({
    summary: "Get Mq",
  })
  @get()
  static getMq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mq",
  })
  @post("{id}")
  static createMq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
