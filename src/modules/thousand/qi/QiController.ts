import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qi")
export default class QiController {
  @operation({
    summary: "Get Qi",
  })
  @get()
  static getQi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qi",
  })
  @post("{id}")
  static createQi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
