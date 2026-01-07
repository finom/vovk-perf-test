import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqw")
export default class CqwController {
  @operation({
    summary: "Get Cqw",
  })
  @get()
  static getCqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqw",
  })
  @post("{id}")
  static createCqw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
