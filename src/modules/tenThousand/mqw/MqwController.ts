import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqw")
export default class MqwController {
  @operation({
    summary: "Get Mqw",
  })
  @get()
  static getMqw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mqw",
  })
  @post("{id}")
  static createMqw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
