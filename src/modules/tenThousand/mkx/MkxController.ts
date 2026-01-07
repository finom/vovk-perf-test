import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkx")
export default class MkxController {
  @operation({
    summary: "Get Mkx",
  })
  @get()
  static getMkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkx",
  })
  @post("{id}")
  static createMkx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
