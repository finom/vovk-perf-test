import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbi")
export default class JbiController {
  @operation({
    summary: "Get Jbi",
  })
  @get()
  static getJbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbi",
  })
  @post("{id}")
  static createJbi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
