import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkw")
export default class KkwController {
  @operation({
    summary: "Get Kkw",
  })
  @get()
  static getKkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkw",
  })
  @post("{id}")
  static createKkw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
