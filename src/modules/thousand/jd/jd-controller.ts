import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jd")
export default class JdController {
  @operation({
    summary: "Get Jd",
  })
  @get()
  static getJd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jd",
  })
  @post("{id}")
  static createJd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
