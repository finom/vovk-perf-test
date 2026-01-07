import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvg")
export default class MvgController {
  @operation({
    summary: "Get Mvg",
  })
  @get()
  static getMvg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvg",
  })
  @post("{id}")
  static createMvg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
