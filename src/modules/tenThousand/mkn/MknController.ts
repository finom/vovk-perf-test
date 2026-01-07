import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkn")
export default class MknController {
  @operation({
    summary: "Get Mkn",
  })
  @get()
  static getMkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkn",
  })
  @post("{id}")
  static createMkn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
