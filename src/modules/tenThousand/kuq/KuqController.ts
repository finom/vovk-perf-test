import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuq")
export default class KuqController {
  @operation({
    summary: "Get Kuq",
  })
  @get()
  static getKuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuq",
  })
  @post("{id}")
  static createKuq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
