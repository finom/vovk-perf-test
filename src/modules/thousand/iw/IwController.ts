import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iw")
export default class IwController {
  @operation({
    summary: "Get Iw",
  })
  @get()
  static getIw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iw",
  })
  @post("{id}")
  static createIw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
