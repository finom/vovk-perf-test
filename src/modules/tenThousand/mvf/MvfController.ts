import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvf")
export default class MvfController {
  @operation({
    summary: "Get Mvf",
  })
  @get()
  static getMvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvf",
  })
  @post("{id}")
  static createMvf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
