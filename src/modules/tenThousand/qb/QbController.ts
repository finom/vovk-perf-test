import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qb")
export default class QbController {
  @operation({
    summary: "Get Qb",
  })
  @get()
  static getQb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qb",
  })
  @post("{id}")
  static createQb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
