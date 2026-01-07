import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jng")
export default class JngController {
  @operation({
    summary: "Get Jng",
  })
  @get()
  static getJng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jng",
  })
  @post("{id}")
  static createJng = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
