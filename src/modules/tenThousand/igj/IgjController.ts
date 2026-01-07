import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igj")
export default class IgjController {
  @operation({
    summary: "Get Igj",
  })
  @get()
  static getIgj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igj",
  })
  @post("{id}")
  static createIgj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
