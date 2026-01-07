import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdg")
export default class MdgController {
  @operation({
    summary: "Get Mdg",
  })
  @get()
  static getMdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdg",
  })
  @post("{id}")
  static createMdg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
