import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcx")
export default class JcxController {
  @operation({
    summary: "Get Jcx",
  })
  @get()
  static getJcx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jcx",
  })
  @post("{id}")
  static createJcx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
