import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zi")
export default class ZiController {
  @operation({
    summary: "Get Zi",
  })
  @get()
  static getZi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zi",
  })
  @post("{id}")
  static createZi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
