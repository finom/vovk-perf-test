import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwu")
export default class KwuController {
  @operation({
    summary: "Get Kwu",
  })
  @get()
  static getKwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwu",
  })
  @post("{id}")
  static createKwu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
