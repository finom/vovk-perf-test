import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkv")
export default class MkvController {
  @operation({
    summary: "Get Mkv",
  })
  @get()
  static getMkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkv",
  })
  @post("{id}")
  static createMkv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
