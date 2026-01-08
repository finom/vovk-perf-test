import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("goq")
export default class GoqController {
  @operation({
    summary: "Get Goq",
  })
  @get()
  static getGoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Goq",
  })
  @post("{id}")
  static createGoq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
