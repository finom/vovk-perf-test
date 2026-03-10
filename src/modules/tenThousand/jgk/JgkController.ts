import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgk")
export default class JgkController {
  @operation({
    summary: "Get Jgk",
  })
  @get()
  static getJgk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jgk",
  })
  @post("{id}")
  static createJgk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
