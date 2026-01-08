import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvn")
export default class JvnController {
  @operation({
    summary: "Get Jvn",
  })
  @get()
  static getJvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvn",
  })
  @post("{id}")
  static createJvn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
