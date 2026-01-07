import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qh")
export default class QhController {
  @operation({
    summary: "Get Qh",
  })
  @get()
  static getQh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qh",
  })
  @post("{id}")
  static createQh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
