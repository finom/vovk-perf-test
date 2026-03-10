import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbq")
export default class JbqController {
  @operation({
    summary: "Get Jbq",
  })
  @get()
  static getJbq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jbq",
  })
  @post("{id}")
  static createJbq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
