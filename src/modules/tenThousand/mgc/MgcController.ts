import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgc")
export default class MgcController {
  @operation({
    summary: "Get Mgc",
  })
  @get()
  static getMgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgc",
  })
  @post("{id}")
  static createMgc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
