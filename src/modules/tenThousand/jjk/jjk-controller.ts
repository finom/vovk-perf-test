import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjk")
export default class JjkController {
  @operation({
    summary: "Get Jjk",
  })
  @get()
  static getJjk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jjk",
  })
  @post("{id}")
  static createJjk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
