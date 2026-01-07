import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnb")
export default class HnbController {
  @operation({
    summary: "Get Hnb",
  })
  @get()
  static getHnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnb",
  })
  @post("{id}")
  static createHnb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
