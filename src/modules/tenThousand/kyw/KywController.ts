import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyw")
export default class KywController {
  @operation({
    summary: "Get Kyw",
  })
  @get()
  static getKyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyw",
  })
  @post("{id}")
  static createKyw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
