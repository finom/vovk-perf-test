import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcq")
export default class KcqController {
  @operation({
    summary: "Get Kcq",
  })
  @get()
  static getKcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcq",
  })
  @post("{id}")
  static createKcq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
