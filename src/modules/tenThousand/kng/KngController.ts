import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kng")
export default class KngController {
  @operation({
    summary: "Get Kng",
  })
  @get()
  static getKng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kng",
  })
  @post("{id}")
  static createKng = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
