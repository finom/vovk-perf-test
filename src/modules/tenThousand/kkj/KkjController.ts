import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkj")
export default class KkjController {
  @operation({
    summary: "Get Kkj",
  })
  @get()
  static getKkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkj",
  })
  @post("{id}")
  static createKkj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
