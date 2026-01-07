import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvx")
export default class MvxController {
  @operation({
    summary: "Get Mvx",
  })
  @get()
  static getMvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvx",
  })
  @post("{id}")
  static createMvx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
