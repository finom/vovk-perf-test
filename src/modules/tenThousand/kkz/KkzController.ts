import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkz")
export default class KkzController {
  @operation({
    summary: "Get Kkz",
  })
  @get()
  static getKkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkz",
  })
  @post("{id}")
  static createKkz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
