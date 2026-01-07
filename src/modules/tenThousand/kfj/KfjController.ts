import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfj")
export default class KfjController {
  @operation({
    summary: "Get Kfj",
  })
  @get()
  static getKfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfj",
  })
  @post("{id}")
  static createKfj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
