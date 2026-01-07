import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ky")
export default class KyController {
  @operation({
    summary: "Get Ky",
  })
  @get()
  static getKy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ky",
  })
  @post("{id}")
  static createKy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
