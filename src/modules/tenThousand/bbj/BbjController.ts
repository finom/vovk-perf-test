import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbj")
export default class BbjController {
  @operation({
    summary: "Get Bbj",
  })
  @get()
  static getBbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbj",
  })
  @post("{id}")
  static createBbj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
