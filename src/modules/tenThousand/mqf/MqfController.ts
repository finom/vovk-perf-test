import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqf")
export default class MqfController {
  @operation({
    summary: "Get Mqf",
  })
  @get()
  static getMqf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mqf",
  })
  @post("{id}")
  static createMqf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
