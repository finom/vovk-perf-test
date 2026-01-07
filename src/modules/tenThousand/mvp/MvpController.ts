import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvp")
export default class MvpController {
  @operation({
    summary: "Get Mvp",
  })
  @get()
  static getMvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvp",
  })
  @post("{id}")
  static createMvp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
