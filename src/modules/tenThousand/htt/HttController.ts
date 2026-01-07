import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htt")
export default class HttController {
  @operation({
    summary: "Get Htt",
  })
  @get()
  static getHtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htt",
  })
  @post("{id}")
  static createHtt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
