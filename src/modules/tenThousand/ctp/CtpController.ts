import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctp")
export default class CtpController {
  @operation({
    summary: "Get Ctp",
  })
  @get()
  static getCtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctp",
  })
  @post("{id}")
  static createCtp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
