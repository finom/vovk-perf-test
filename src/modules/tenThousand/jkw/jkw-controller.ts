import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkw")
export default class JkwController {
  @operation({
    summary: "Get Jkw",
  })
  @get()
  static getJkw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jkw",
  })
  @post("{id}")
  static createJkw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
