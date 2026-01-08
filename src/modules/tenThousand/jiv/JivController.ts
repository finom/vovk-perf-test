import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jiv")
export default class JivController {
  @operation({
    summary: "Get Jiv",
  })
  @get()
  static getJiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jiv",
  })
  @post("{id}")
  static createJiv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
