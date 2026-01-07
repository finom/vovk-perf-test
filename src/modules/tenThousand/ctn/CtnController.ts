import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctn")
export default class CtnController {
  @operation({
    summary: "Get Ctn",
  })
  @get()
  static getCtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctn",
  })
  @post("{id}")
  static createCtn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
