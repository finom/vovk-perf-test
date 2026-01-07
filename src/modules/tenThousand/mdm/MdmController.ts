import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdm")
export default class MdmController {
  @operation({
    summary: "Get Mdm",
  })
  @get()
  static getMdm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdm",
  })
  @post("{id}")
  static createMdm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
