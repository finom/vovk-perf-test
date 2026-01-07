import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izt")
export default class IztController {
  @operation({
    summary: "Get Izt",
  })
  @get()
  static getIzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izt",
  })
  @post("{id}")
  static createIzt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
