import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkc")
export default class MkcController {
  @operation({
    summary: "Get Mkc",
  })
  @get()
  static getMkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkc",
  })
  @post("{id}")
  static createMkc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
