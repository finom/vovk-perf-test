import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kww")
export default class KwwController {
  @operation({
    summary: "Get Kww",
  })
  @get()
  static getKww = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kww",
  })
  @post("{id}")
  static createKww = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
