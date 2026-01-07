import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqv")
export default class KqvController {
  @operation({
    summary: "Get Kqv",
  })
  @get()
  static getKqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqv",
  })
  @post("{id}")
  static createKqv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
