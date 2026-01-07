import { procedure, prefix, get, post, operation } from "vovk";

@prefix("al")
export default class AlController {
  @operation({
    summary: "Get Al",
  })
  @get()
  static getAl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Al",
  })
  @post("{id}")
  static createAl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
