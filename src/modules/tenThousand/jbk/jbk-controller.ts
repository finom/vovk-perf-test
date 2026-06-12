import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbk")
export default class JbkController {
  @operation({
    summary: "Get Jbk",
  })
  @get()
  static getJbk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jbk",
  })
  @post("{id}")
  static createJbk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
