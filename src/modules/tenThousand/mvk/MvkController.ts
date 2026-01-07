import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvk")
export default class MvkController {
  @operation({
    summary: "Get Mvk",
  })
  @get()
  static getMvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvk",
  })
  @post("{id}")
  static createMvk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
