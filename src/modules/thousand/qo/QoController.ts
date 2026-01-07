import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qo")
export default class QoController {
  @operation({
    summary: "Get Qo",
  })
  @get()
  static getQo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qo",
  })
  @post("{id}")
  static createQo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
