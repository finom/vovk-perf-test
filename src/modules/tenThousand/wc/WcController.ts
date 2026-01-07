import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wc")
export default class WcController {
  @operation({
    summary: "Get Wc",
  })
  @get()
  static getWc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wc",
  })
  @post("{id}")
  static createWc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
