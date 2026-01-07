import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwo")
export default class DwoController {
  @operation({
    summary: "Get Dwo",
  })
  @get()
  static getDwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwo",
  })
  @post("{id}")
  static createDwo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
