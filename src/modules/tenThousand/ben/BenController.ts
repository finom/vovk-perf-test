import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ben")
export default class BenController {
  @operation({
    summary: "Get Ben",
  })
  @get()
  static getBen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ben",
  })
  @post("{id}")
  static createBen = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
