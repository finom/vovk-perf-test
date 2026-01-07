import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clt")
export default class CltController {
  @operation({
    summary: "Get Clt",
  })
  @get()
  static getClt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clt",
  })
  @post("{id}")
  static createClt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
