import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqh")
export default class MqhController {
  @operation({
    summary: "Get Mqh",
  })
  @get()
  static getMqh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mqh",
  })
  @post("{id}")
  static createMqh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
