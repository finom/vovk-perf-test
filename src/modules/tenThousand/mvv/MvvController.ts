import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvv")
export default class MvvController {
  @operation({
    summary: "Get Mvv",
  })
  @get()
  static getMvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvv",
  })
  @post("{id}")
  static createMvv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
