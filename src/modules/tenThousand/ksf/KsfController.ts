import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksf")
export default class KsfController {
  @operation({
    summary: "Get Ksf",
  })
  @get()
  static getKsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksf",
  })
  @post("{id}")
  static createKsf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
