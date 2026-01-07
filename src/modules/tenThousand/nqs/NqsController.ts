import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqs")
export default class NqsController {
  @operation({
    summary: "Get Nqs",
  })
  @get()
  static getNqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqs",
  })
  @post("{id}")
  static createNqs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
