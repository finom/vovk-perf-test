import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mb")
export default class MbController {
  @operation({
    summary: "Get Mb",
  })
  @get()
  static getMb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mb",
  })
  @post("{id}")
  static createMb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
