import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdv")
export default class KdvController {
  @operation({
    summary: "Get Kdv",
  })
  @get()
  static getKdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdv",
  })
  @post("{id}")
  static createKdv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
