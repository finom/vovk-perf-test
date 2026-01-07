import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkb")
export default class MkbController {
  @operation({
    summary: "Get Mkb",
  })
  @get()
  static getMkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkb",
  })
  @post("{id}")
  static createMkb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
