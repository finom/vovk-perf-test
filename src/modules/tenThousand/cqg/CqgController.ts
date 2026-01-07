import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqg")
export default class CqgController {
  @operation({
    summary: "Get Cqg",
  })
  @get()
  static getCqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqg",
  })
  @post("{id}")
  static createCqg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
