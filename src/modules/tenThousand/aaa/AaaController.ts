import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaa")
export default class AaaController {
  @operation({
    summary: "Get Aaa",
  })
  @get()
  static getAaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aaa",
  })
  @post("{id}")
  static createAaa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
