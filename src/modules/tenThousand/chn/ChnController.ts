import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chn")
export default class ChnController {
  @operation({
    summary: "Get Chn",
  })
  @get()
  static getChn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chn",
  })
  @post("{id}")
  static createChn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
