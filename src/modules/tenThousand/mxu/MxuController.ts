import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxu")
export default class MxuController {
  @operation({
    summary: "Get Mxu",
  })
  @get()
  static getMxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxu",
  })
  @post("{id}")
  static createMxu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
