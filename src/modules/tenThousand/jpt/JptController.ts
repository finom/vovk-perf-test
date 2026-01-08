import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpt")
export default class JptController {
  @operation({
    summary: "Get Jpt",
  })
  @get()
  static getJpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpt",
  })
  @post("{id}")
  static createJpt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
