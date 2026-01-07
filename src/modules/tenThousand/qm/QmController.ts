import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qm")
export default class QmController {
  @operation({
    summary: "Get Qm",
  })
  @get()
  static getQm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qm",
  })
  @post("{id}")
  static createQm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
