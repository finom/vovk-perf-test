import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksq")
export default class KsqController {
  @operation({
    summary: "Get Ksq",
  })
  @get()
  static getKsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksq",
  })
  @post("{id}")
  static createKsq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
