import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dux")
export default class DuxController {
  @operation({
    summary: "Get Dux",
  })
  @get()
  static getDux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dux",
  })
  @post("{id}")
  static createDux = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
