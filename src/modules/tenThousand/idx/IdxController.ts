import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idx")
export default class IdxController {
  @operation({
    summary: "Get Idx",
  })
  @get()
  static getIdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idx",
  })
  @post("{id}")
  static createIdx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
