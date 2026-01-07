import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krm")
export default class KrmController {
  @operation({
    summary: "Get Krm",
  })
  @get()
  static getKrm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krm",
  })
  @post("{id}")
  static createKrm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
