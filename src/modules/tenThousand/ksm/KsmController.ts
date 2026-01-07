import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksm")
export default class KsmController {
  @operation({
    summary: "Get Ksm",
  })
  @get()
  static getKsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksm",
  })
  @post("{id}")
  static createKsm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
