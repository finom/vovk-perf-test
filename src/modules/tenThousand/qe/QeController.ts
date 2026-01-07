import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qe")
export default class QeController {
  @operation({
    summary: "Get Qe",
  })
  @get()
  static getQe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qe",
  })
  @post("{id}")
  static createQe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
