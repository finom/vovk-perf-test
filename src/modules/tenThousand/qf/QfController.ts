import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qf")
export default class QfController {
  @operation({
    summary: "Get Qf",
  })
  @get()
  static getQf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qf",
  })
  @post("{id}")
  static createQf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
