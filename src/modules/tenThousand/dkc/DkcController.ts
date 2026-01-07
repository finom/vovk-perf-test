import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkc")
export default class DkcController {
  @operation({
    summary: "Get Dkc",
  })
  @get()
  static getDkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkc",
  })
  @post("{id}")
  static createDkc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
