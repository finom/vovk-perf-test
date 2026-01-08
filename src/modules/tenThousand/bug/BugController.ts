import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bug")
export default class BugController {
  @operation({
    summary: "Get Bug",
  })
  @get()
  static getBug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bug",
  })
  @post("{id}")
  static createBug = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
