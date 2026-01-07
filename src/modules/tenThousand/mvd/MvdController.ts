import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvd")
export default class MvdController {
  @operation({
    summary: "Get Mvd",
  })
  @get()
  static getMvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvd",
  })
  @post("{id}")
  static createMvd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
