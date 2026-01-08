import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdj")
export default class MdjController {
  @operation({
    summary: "Get Mdj",
  })
  @get()
  static getMdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdj",
  })
  @post("{id}")
  static createMdj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
