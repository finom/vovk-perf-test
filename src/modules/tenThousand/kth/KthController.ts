import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kth")
export default class KthController {
  @operation({
    summary: "Get Kth",
  })
  @get()
  static getKth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kth",
  })
  @post("{id}")
  static createKth = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
