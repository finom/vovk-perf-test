import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvb")
export default class JvbController {
  @operation({
    summary: "Get Jvb",
  })
  @get()
  static getJvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvb",
  })
  @post("{id}")
  static createJvb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
