import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbq")
export default class BbqController {
  @operation({
    summary: "Get Bbq",
  })
  @get()
  static getBbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbq",
  })
  @post("{id}")
  static createBbq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
