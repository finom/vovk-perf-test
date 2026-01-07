import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qc")
export default class QcController {
  @operation({
    summary: "Get Qc",
  })
  @get()
  static getQc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qc",
  })
  @post("{id}")
  static createQc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
