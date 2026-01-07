import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksj")
export default class KsjController {
  @operation({
    summary: "Get Ksj",
  })
  @get()
  static getKsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksj",
  })
  @post("{id}")
  static createKsj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
