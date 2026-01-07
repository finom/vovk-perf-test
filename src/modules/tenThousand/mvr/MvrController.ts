import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvr")
export default class MvrController {
  @operation({
    summary: "Get Mvr",
  })
  @get()
  static getMvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvr",
  })
  @post("{id}")
  static createMvr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
