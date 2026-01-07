import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvi")
export default class MviController {
  @operation({
    summary: "Get Mvi",
  })
  @get()
  static getMvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvi",
  })
  @post("{id}")
  static createMvi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
