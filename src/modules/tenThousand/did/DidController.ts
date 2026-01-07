import { procedure, prefix, get, post, operation } from "vovk";

@prefix("did")
export default class DidController {
  @operation({
    summary: "Get Did",
  })
  @get()
  static getDid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Did",
  })
  @post("{id}")
  static createDid = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
