import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvc")
export default class KvcController {
  @operation({
    summary: "Get Kvc",
  })
  @get()
  static getKvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvc",
  })
  @post("{id}")
  static createKvc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
