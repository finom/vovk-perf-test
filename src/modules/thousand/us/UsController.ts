import { procedure, prefix, get, post, operation } from "vovk";

@prefix("us")
export default class UsController {
  @operation({
    summary: "Get Us",
  })
  @get()
  static getUs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Us",
  })
  @post("{id}")
  static createUs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
