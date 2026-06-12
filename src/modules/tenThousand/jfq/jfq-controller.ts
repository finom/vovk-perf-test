import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfq")
export default class JfqController {
  @operation({
    summary: "Get Jfq",
  })
  @get()
  static getJfq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jfq",
  })
  @post("{id}")
  static createJfq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
