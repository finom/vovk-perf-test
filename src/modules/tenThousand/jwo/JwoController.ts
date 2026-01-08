import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jwo")
export default class JwoController {
  @operation({
    summary: "Get Jwo",
  })
  @get()
  static getJwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwo",
  })
  @post("{id}")
  static createJwo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
