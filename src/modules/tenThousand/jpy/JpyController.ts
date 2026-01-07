import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpy")
export default class JpyController {
  @operation({
    summary: "Get Jpy",
  })
  @get()
  static getJpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpy",
  })
  @post("{id}")
  static createJpy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
