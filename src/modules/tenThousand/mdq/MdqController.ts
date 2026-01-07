import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdq")
export default class MdqController {
  @operation({
    summary: "Get Mdq",
  })
  @get()
  static getMdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdq",
  })
  @post("{id}")
  static createMdq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
