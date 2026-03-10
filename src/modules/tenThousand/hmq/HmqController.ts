import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmq")
export default class HmqController {
  @operation({
    summary: "Get Hmq",
  })
  @get()
  static getHmq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hmq",
  })
  @post("{id}")
  static createHmq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
