import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvx")
export default class JvxController {
  @operation({
    summary: "Get Jvx",
  })
  @get()
  static getJvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvx",
  })
  @post("{id}")
  static createJvx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
