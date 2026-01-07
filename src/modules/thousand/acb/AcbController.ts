import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acb")
export default class AcbController {
  @operation({
    summary: "Get Acb",
  })
  @get()
  static getAcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acb",
  })
  @post("{id}")
  static createAcb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
