import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jql")
export default class JqlController {
  @operation({
    summary: "Get Jql",
  })
  @get()
  static getJql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jql",
  })
  @post("{id}")
  static createJql = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
