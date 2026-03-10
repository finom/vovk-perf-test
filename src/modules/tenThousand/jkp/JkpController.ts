import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkp")
export default class JkpController {
  @operation({
    summary: "Get Jkp",
  })
  @get()
  static getJkp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jkp",
  })
  @post("{id}")
  static createJkp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
