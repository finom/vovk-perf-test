import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhn")
export default class DhnController {
  @operation({
    summary: "Get Dhn",
  })
  @get()
  static getDhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhn",
  })
  @post("{id}")
  static createDhn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
