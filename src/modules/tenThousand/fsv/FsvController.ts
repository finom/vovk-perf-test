import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsv")
export default class FsvController {
  @operation({
    summary: "Get Fsv",
  })
  @get()
  static getFsv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsv",
  })
  @post("{id}")
  static createFsv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
