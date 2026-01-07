import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdy")
export default class KdyController {
  @operation({
    summary: "Get Kdy",
  })
  @get()
  static getKdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdy",
  })
  @post("{id}")
  static createKdy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
