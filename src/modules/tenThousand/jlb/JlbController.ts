import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlb")
export default class JlbController {
  @operation({
    summary: "Get Jlb",
  })
  @get()
  static getJlb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlb",
  })
  @post("{id}")
  static createJlb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
