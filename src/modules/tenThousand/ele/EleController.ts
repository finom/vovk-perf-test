import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ele")
export default class EleController {
  @operation({
    summary: "Get Ele",
  })
  @get()
  static getEle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ele",
  })
  @post("{id}")
  static createEle = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
