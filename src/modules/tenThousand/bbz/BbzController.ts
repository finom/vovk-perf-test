import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbz")
export default class BbzController {
  @operation({
    summary: "Get Bbz",
  })
  @get()
  static getBbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbz",
  })
  @post("{id}")
  static createBbz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
