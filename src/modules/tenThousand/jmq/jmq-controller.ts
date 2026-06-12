import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmq")
export default class JmqController {
  @operation({
    summary: "Get Jmq",
  })
  @get()
  static getJmq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jmq",
  })
  @post("{id}")
  static createJmq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
