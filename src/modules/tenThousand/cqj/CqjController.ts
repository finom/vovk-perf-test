import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqj")
export default class CqjController {
  @operation({
    summary: "Get Cqj",
  })
  @get()
  static getCqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqj",
  })
  @post("{id}")
  static createCqj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
