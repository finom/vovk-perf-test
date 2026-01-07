import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqv")
export default class CqvController {
  @operation({
    summary: "Get Cqv",
  })
  @get()
  static getCqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqv",
  })
  @post("{id}")
  static createCqv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
