import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkj")
export default class JkjController {
  @operation({
    summary: "Get Jkj",
  })
  @get()
  static getJkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkj",
  })
  @post("{id}")
  static createJkj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
