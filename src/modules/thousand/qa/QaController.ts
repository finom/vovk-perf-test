import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qa")
export default class QaController {
  @operation({
    summary: "Get Qa",
  })
  @get()
  static getQa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qa",
  })
  @post("{id}")
  static createQa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
