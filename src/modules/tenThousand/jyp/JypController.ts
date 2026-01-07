import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyp")
export default class JypController {
  @operation({
    summary: "Get Jyp",
  })
  @get()
  static getJyp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyp",
  })
  @post("{id}")
  static createJyp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
