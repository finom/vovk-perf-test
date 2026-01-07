import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbf")
export default class BbfController {
  @operation({
    summary: "Get Bbf",
  })
  @get()
  static getBbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbf",
  })
  @post("{id}")
  static createBbf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
