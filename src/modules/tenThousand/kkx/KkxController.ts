import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkx")
export default class KkxController {
  @operation({
    summary: "Get Kkx",
  })
  @get()
  static getKkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkx",
  })
  @post("{id}")
  static createKkx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
