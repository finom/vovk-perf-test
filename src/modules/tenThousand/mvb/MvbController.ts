import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvb")
export default class MvbController {
  @operation({
    summary: "Get Mvb",
  })
  @get()
  static getMvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvb",
  })
  @post("{id}")
  static createMvb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
