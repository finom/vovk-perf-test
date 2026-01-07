import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqd")
export default class CqdController {
  @operation({
    summary: "Get Cqd",
  })
  @get()
  static getCqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqd",
  })
  @post("{id}")
  static createCqd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
