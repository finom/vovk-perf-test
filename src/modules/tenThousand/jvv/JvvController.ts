import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvv")
export default class JvvController {
  @operation({
    summary: "Get Jvv",
  })
  @get()
  static getJvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvv",
  })
  @post("{id}")
  static createJvv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
