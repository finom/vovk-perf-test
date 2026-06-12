import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqb")
export default class MqbController {
  @operation({
    summary: "Get Mqb",
  })
  @get()
  static getMqb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mqb",
  })
  @post("{id}")
  static createMqb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
