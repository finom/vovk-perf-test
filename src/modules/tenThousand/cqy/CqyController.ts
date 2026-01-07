import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqy")
export default class CqyController {
  @operation({
    summary: "Get Cqy",
  })
  @get()
  static getCqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqy",
  })
  @post("{id}")
  static createCqy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
