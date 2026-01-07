import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbn")
export default class GbnController {
  @operation({
    summary: "Get Gbn",
  })
  @get()
  static getGbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbn",
  })
  @post("{id}")
  static createGbn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
