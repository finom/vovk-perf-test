import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fw")
export default class FwController {
  @operation({
    summary: "Get Fw",
  })
  @get()
  static getFw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fw",
  })
  @post("{id}")
  static createFw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
