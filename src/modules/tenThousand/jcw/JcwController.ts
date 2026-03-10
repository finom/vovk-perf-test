import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcw")
export default class JcwController {
  @operation({
    summary: "Get Jcw",
  })
  @get()
  static getJcw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jcw",
  })
  @post("{id}")
  static createJcw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
