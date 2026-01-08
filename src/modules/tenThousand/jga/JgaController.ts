import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jga")
export default class JgaController {
  @operation({
    summary: "Get Jga",
  })
  @get()
  static getJga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jga",
  })
  @post("{id}")
  static createJga = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
