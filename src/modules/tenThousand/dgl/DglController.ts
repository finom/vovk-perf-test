import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgl")
export default class DglController {
  @operation({
    summary: "Get Dgl",
  })
  @get()
  static getDgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgl",
  })
  @post("{id}")
  static createDgl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
