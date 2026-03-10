import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqv")
export default class MqvController {
  @operation({
    summary: "Get Mqv",
  })
  @get()
  static getMqv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mqv",
  })
  @post("{id}")
  static createMqv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
