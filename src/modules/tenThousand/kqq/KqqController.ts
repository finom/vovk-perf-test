import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqq")
export default class KqqController {
  @operation({
    summary: "Get Kqq",
  })
  @get()
  static getKqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqq",
  })
  @post("{id}")
  static createKqq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
