import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icv")
export default class IcvController {
  @operation({
    summary: "Get Icv",
  })
  @get()
  static getIcv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icv",
  })
  @post("{id}")
  static createIcv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
