import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjo")
export default class JjoController {
  @operation({
    summary: "Get Jjo",
  })
  @get()
  static getJjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjo",
  })
  @post("{id}")
  static createJjo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
