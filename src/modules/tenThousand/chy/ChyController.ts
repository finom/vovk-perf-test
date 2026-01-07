import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chy")
export default class ChyController {
  @operation({
    summary: "Get Chy",
  })
  @get()
  static getChy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chy",
  })
  @post("{id}")
  static createChy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
