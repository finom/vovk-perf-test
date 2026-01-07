import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkz")
export default class MkzController {
  @operation({
    summary: "Get Mkz",
  })
  @get()
  static getMkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkz",
  })
  @post("{id}")
  static createMkz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
