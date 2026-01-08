import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldj")
export default class LdjController {
  @operation({
    summary: "Get Ldj",
  })
  @get()
  static getLdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldj",
  })
  @post("{id}")
  static createLdj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
