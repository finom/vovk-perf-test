import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jju")
export default class JjuController {
  @operation({
    summary: "Get Jju",
  })
  @get()
  static getJju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jju",
  })
  @post("{id}")
  static createJju = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
