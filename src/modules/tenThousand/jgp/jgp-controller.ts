import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgp")
export default class JgpController {
  @operation({
    summary: "Get Jgp",
  })
  @get()
  static getJgp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jgp",
  })
  @post("{id}")
  static createJgp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
