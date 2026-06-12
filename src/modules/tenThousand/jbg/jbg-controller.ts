import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbg")
export default class JbgController {
  @operation({
    summary: "Get Jbg",
  })
  @get()
  static getJbg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jbg",
  })
  @post("{id}")
  static createJbg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
