import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmp")
export default class DmpController {
  @operation({
    summary: "Get Dmp",
  })
  @get()
  static getDmp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmp",
  })
  @post("{id}")
  static createDmp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
