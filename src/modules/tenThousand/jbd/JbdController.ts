import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbd")
export default class JbdController {
  @operation({
    summary: "Get Jbd",
  })
  @get()
  static getJbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbd",
  })
  @post("{id}")
  static createJbd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
