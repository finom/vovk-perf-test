import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kop")
export default class KopController {
  @operation({
    summary: "Get Kop",
  })
  @get()
  static getKop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kop",
  })
  @post("{id}")
  static createKop = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
