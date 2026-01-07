import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqg")
export default class KqgController {
  @operation({
    summary: "Get Kqg",
  })
  @get()
  static getKqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqg",
  })
  @post("{id}")
  static createKqg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
