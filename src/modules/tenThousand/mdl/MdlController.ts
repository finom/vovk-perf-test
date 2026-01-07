import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdl")
export default class MdlController {
  @operation({
    summary: "Get Mdl",
  })
  @get()
  static getMdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdl",
  })
  @post("{id}")
  static createMdl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
