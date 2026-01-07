import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdv")
export default class MdvController {
  @operation({
    summary: "Get Mdv",
  })
  @get()
  static getMdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdv",
  })
  @post("{id}")
  static createMdv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
