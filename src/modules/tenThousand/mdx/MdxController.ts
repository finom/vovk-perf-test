import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
