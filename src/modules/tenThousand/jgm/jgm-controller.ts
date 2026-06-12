import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgm")
export default class JgmController {
  @operation({
    summary: "Get Jgm",
  })
  @get()
  static getJgm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jgm",
  })
  @post("{id}")
  static createJgm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
