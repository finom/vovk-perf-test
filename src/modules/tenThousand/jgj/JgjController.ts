import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgj")
export default class JgjController {
  @operation({
    summary: "Get Jgj",
  })
  @get()
  static getJgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgj",
  })
  @post("{id}")
  static createJgj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
