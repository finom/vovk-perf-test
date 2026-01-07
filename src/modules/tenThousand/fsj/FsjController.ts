import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsj")
export default class FsjController {
  @operation({
    summary: "Get Fsj",
  })
  @get()
  static getFsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsj",
  })
  @post("{id}")
  static createFsj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
