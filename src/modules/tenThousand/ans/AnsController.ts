import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ans")
export default class AnsController {
  @operation({
    summary: "Get Ans",
  })
  @get()
  static getAns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ans",
  })
  @post("{id}")
  static createAns = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
