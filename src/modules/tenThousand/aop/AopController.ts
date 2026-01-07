import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aop")
export default class AopController {
  @operation({
    summary: "Get Aop",
  })
  @get()
  static getAop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aop",
  })
  @post("{id}")
  static createAop = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
