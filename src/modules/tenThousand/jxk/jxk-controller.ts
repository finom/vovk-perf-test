import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxk")
export default class JxkController {
  @operation({
    summary: "Get Jxk",
  })
  @get()
  static getJxk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jxk",
  })
  @post("{id}")
  static createJxk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
