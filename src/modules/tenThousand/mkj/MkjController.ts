import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkj")
export default class MkjController {
  @operation({
    summary: "Get Mkj",
  })
  @get()
  static getMkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkj",
  })
  @post("{id}")
  static createMkj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
