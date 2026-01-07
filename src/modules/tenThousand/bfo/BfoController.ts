import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfo")
export default class BfoController {
  @operation({
    summary: "Get Bfo",
  })
  @get()
  static getBfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfo",
  })
  @post("{id}")
  static createBfo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
