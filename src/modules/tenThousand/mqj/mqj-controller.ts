import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqj")
export default class MqjController {
  @operation({
    summary: "Get Mqj",
  })
  @get()
  static getMqj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mqj",
  })
  @post("{id}")
  static createMqj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
