import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmg")
export default class KmgController {
  @operation({
    summary: "Get Kmg",
  })
  @get()
  static getKmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmg",
  })
  @post("{id}")
  static createKmg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
