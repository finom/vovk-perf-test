import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgc")
export default class JgcController {
  @operation({
    summary: "Get Jgc",
  })
  @get()
  static getJgc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jgc",
  })
  @post("{id}")
  static createJgc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
