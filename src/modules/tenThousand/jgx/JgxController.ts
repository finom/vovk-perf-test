import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgx")
export default class JgxController {
  @operation({
    summary: "Get Jgx",
  })
  @get()
  static getJgx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jgx",
  })
  @post("{id}")
  static createJgx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
