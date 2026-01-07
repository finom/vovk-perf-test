import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
