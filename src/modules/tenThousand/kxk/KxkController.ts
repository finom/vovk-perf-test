import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxk")
export default class KxkController {
  @operation({
    summary: "Get Kxk",
  })
  @get()
  static getKxk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxk",
  })
  @post("{id}")
  static createKxk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
