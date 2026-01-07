import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyi")
export default class KyiController {
  @operation({
    summary: "Get Kyi",
  })
  @get()
  static getKyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyi",
  })
  @post("{id}")
  static createKyi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
