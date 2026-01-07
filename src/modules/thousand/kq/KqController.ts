import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kq")
export default class KqController {
  @operation({
    summary: "Get Kq",
  })
  @get()
  static getKq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kq",
  })
  @post("{id}")
  static createKq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
