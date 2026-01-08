import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcr")
export default class JcrController {
  @operation({
    summary: "Get Jcr",
  })
  @get()
  static getJcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcr",
  })
  @post("{id}")
  static createJcr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
