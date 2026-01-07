import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qq")
export default class QqController {
  @operation({
    summary: "Get Qq",
  })
  @get()
  static getQq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qq",
  })
  @post("{id}")
  static createQq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
