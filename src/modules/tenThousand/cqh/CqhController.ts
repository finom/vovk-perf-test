import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqh")
export default class CqhController {
  @operation({
    summary: "Get Cqh",
  })
  @get()
  static getCqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqh",
  })
  @post("{id}")
  static createCqh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
