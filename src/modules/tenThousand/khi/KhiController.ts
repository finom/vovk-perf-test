import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khi")
export default class KhiController {
  @operation({
    summary: "Get Khi",
  })
  @get()
  static getKhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khi",
  })
  @post("{id}")
  static createKhi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
