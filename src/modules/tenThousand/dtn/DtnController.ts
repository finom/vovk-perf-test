import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtn")
export default class DtnController {
  @operation({
    summary: "Get Dtn",
  })
  @get()
  static getDtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtn",
  })
  @post("{id}")
  static createDtn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
