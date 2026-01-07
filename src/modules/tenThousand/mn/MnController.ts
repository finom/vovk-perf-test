import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mn")
export default class MnController {
  @operation({
    summary: "Get Mn",
  })
  @get()
  static getMn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mn",
  })
  @post("{id}")
  static createMn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
