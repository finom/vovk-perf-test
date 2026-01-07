import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqs")
export default class DqsController {
  @operation({
    summary: "Get Dqs",
  })
  @get()
  static getDqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqs",
  })
  @post("{id}")
  static createDqs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
