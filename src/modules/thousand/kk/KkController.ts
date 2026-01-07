import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kk")
export default class KkController {
  @operation({
    summary: "Get Kk",
  })
  @get()
  static getKk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kk",
  })
  @post("{id}")
  static createKk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
