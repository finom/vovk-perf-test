import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctr")
export default class CtrController {
  @operation({
    summary: "Get Ctr",
  })
  @get()
  static getCtr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctr",
  })
  @post("{id}")
  static createCtr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
