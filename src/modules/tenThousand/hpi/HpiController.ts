import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpi")
export default class HpiController {
  @operation({
    summary: "Get Hpi",
  })
  @get()
  static getHpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpi",
  })
  @post("{id}")
  static createHpi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
