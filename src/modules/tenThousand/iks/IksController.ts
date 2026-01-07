import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iks")
export default class IksController {
  @operation({
    summary: "Get Iks",
  })
  @get()
  static getIks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iks",
  })
  @post("{id}")
  static createIks = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
