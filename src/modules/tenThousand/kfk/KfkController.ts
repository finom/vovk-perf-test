import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfk")
export default class KfkController {
  @operation({
    summary: "Get Kfk",
  })
  @get()
  static getKfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfk",
  })
  @post("{id}")
  static createKfk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
