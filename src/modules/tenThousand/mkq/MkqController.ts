import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkq")
export default class MkqController {
  @operation({
    summary: "Get Mkq",
  })
  @get()
  static getMkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkq",
  })
  @post("{id}")
  static createMkq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
