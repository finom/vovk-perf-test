import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcz")
export default class JczController {
  @operation({
    summary: "Get Jcz",
  })
  @get()
  static getJcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcz",
  })
  @post("{id}")
  static createJcz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
