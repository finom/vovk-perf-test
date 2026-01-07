import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqu")
export default class NquController {
  @operation({
    summary: "Get Nqu",
  })
  @get()
  static getNqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqu",
  })
  @post("{id}")
  static createNqu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
