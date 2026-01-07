import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbb")
export default class KbbController {
  @operation({
    summary: "Get Kbb",
  })
  @get()
  static getKbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbb",
  })
  @post("{id}")
  static createKbb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
