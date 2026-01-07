import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvq")
export default class MvqController {
  @operation({
    summary: "Get Mvq",
  })
  @get()
  static getMvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvq",
  })
  @post("{id}")
  static createMvq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
