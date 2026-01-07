import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfo")
export default class KfoController {
  @operation({
    summary: "Get Kfo",
  })
  @get()
  static getKfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfo",
  })
  @post("{id}")
  static createKfo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
