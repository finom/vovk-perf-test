import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iow")
export default class IowController {
  @operation({
    summary: "Get Iow",
  })
  @get()
  static getIow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iow",
  })
  @post("{id}")
  static createIow = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
