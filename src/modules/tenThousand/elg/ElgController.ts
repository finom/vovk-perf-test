import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elg")
export default class ElgController {
  @operation({
    summary: "Get Elg",
  })
  @get()
  static getElg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elg",
  })
  @post("{id}")
  static createElg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
