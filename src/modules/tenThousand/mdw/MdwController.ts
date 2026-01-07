import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdw")
export default class MdwController {
  @operation({
    summary: "Get Mdw",
  })
  @get()
  static getMdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdw",
  })
  @post("{id}")
  static createMdw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
