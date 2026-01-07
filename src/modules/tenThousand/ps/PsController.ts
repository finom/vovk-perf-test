import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ps")
export default class PsController {
  @operation({
    summary: "Get Ps",
  })
  @get()
  static getPs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ps",
  })
  @post("{id}")
  static createPs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
