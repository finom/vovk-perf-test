import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbp")
export default class JbpController {
  @operation({
    summary: "Get Jbp",
  })
  @get()
  static getJbp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jbp",
  })
  @post("{id}")
  static createJbp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
