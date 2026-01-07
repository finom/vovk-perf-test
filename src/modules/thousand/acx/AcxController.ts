import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acx")
export default class AcxController {
  @operation({
    summary: "Get Acx",
  })
  @get()
  static getAcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acx",
  })
  @post("{id}")
  static createAcx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
