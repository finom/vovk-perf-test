import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qz")
export default class QzController {
  @operation({
    summary: "Get Qz",
  })
  @get()
  static getQz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qz",
  })
  @post("{id}")
  static createQz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
