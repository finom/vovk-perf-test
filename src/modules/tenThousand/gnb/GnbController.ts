import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnb")
export default class GnbController {
  @operation({
    summary: "Get Gnb",
  })
  @get()
  static getGnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnb",
  })
  @post("{id}")
  static createGnb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
