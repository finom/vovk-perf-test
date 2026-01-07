import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkd")
export default class MkdController {
  @operation({
    summary: "Get Mkd",
  })
  @get()
  static getMkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkd",
  })
  @post("{id}")
  static createMkd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
