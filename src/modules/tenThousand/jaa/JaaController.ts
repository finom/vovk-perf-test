import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaa")
export default class JaaController {
  @operation({
    summary: "Get Jaa",
  })
  @get()
  static getJaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jaa",
  })
  @post("{id}")
  static createJaa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
