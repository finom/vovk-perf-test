import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvl")
export default class MvlController {
  @operation({
    summary: "Get Mvl",
  })
  @get()
  static getMvl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvl",
  })
  @post("{id}")
  static createMvl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
