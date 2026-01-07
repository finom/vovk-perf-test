import { procedure, prefix, get, post, operation } from "vovk";

@prefix("maa")
export default class MaaController {
  @operation({
    summary: "Get Maa",
  })
  @get()
  static getMaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Maa",
  })
  @post("{id}")
  static createMaa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
