import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkw")
export default class MkwController {
  @operation({
    summary: "Get Mkw",
  })
  @get()
  static getMkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkw",
  })
  @post("{id}")
  static createMkw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
