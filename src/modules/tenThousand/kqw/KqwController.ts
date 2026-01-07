import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqw")
export default class KqwController {
  @operation({
    summary: "Get Kqw",
  })
  @get()
  static getKqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqw",
  })
  @post("{id}")
  static createKqw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
