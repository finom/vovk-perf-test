import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvm")
export default class JvmController {
  @operation({
    summary: "Get Jvm",
  })
  @get()
  static getJvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvm",
  })
  @post("{id}")
  static createJvm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
