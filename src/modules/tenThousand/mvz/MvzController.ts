import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvz")
export default class MvzController {
  @operation({
    summary: "Get Mvz",
  })
  @get()
  static getMvz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvz",
  })
  @post("{id}")
  static createMvz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
