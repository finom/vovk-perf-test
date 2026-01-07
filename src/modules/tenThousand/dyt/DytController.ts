import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyt")
export default class DytController {
  @operation({
    summary: "Get Dyt",
  })
  @get()
  static getDyt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyt",
  })
  @post("{id}")
  static createDyt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
