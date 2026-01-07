import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjk")
export default class KjkController {
  @operation({
    summary: "Get Kjk",
  })
  @get()
  static getKjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjk",
  })
  @post("{id}")
  static createKjk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
