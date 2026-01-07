import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccu")
export default class CcuController {
  @operation({
    summary: "Get Ccu",
  })
  @get()
  static getCcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccu",
  })
  @post("{id}")
  static createCcu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
