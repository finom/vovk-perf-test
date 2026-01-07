import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqm")
export default class CqmController {
  @operation({
    summary: "Get Cqm",
  })
  @get()
  static getCqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqm",
  })
  @post("{id}")
  static createCqm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
