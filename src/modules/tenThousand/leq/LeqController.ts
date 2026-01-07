import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leq")
export default class LeqController {
  @operation({
    summary: "Get Leq",
  })
  @get()
  static getLeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Leq",
  })
  @post("{id}")
  static createLeq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
