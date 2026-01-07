import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqj")
export default class KqjController {
  @operation({
    summary: "Get Kqj",
  })
  @get()
  static getKqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqj",
  })
  @post("{id}")
  static createKqj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
