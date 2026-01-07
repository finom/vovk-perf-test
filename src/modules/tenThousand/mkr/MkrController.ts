import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkr")
export default class MkrController {
  @operation({
    summary: "Get Mkr",
  })
  @get()
  static getMkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkr",
  })
  @post("{id}")
  static createMkr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
