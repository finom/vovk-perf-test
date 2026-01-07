import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnv")
export default class HnvController {
  @operation({
    summary: "Get Hnv",
  })
  @get()
  static getHnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnv",
  })
  @post("{id}")
  static createHnv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
