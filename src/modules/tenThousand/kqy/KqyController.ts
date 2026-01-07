import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqy")
export default class KqyController {
  @operation({
    summary: "Get Kqy",
  })
  @get()
  static getKqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqy",
  })
  @post("{id}")
  static createKqy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
