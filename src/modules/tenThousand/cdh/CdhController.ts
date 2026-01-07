import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdh")
export default class CdhController {
  @operation({
    summary: "Get Cdh",
  })
  @get()
  static getCdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdh",
  })
  @post("{id}")
  static createCdh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
