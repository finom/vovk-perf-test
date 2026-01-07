import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kak")
export default class KakController {
  @operation({
    summary: "Get Kak",
  })
  @get()
  static getKak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kak",
  })
  @post("{id}")
  static createKak = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
