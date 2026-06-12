import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jni")
export default class JniController {
  @operation({
    summary: "Get Jni",
  })
  @get()
  static getJni = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jni",
  })
  @post("{id}")
  static createJni = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
