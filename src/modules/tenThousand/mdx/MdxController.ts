import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdx")
export default class MdxController {
  @operation({
    summary: "Get Mdx",
  })
  @get()
  static getMdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdx",
  })
  @post("{id}")
  static createMdx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
