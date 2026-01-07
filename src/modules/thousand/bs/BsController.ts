import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bs")
export default class BsController {
  @operation({
    summary: "Get Bs",
  })
  @get()
  static getBs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bs",
  })
  @post("{id}")
  static createBs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
