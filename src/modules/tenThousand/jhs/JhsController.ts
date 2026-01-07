import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhs")
export default class JhsController {
  @operation({
    summary: "Get Jhs",
  })
  @get()
  static getJhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhs",
  })
  @post("{id}")
  static createJhs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
