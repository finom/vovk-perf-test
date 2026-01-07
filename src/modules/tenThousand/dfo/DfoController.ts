import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfo")
export default class DfoController {
  @operation({
    summary: "Get Dfo",
  })
  @get()
  static getDfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfo",
  })
  @post("{id}")
  static createDfo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
