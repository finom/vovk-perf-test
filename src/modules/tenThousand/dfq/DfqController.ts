import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfq")
export default class DfqController {
  @operation({
    summary: "Get Dfq",
  })
  @get()
  static getDfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfq",
  })
  @post("{id}")
  static createDfq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
