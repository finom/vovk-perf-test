import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmv")
export default class KmvController {
  @operation({
    summary: "Get Kmv",
  })
  @get()
  static getKmv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmv",
  })
  @post("{id}")
  static createKmv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
