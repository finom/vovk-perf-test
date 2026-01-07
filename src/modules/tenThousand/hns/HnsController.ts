import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hns")
export default class HnsController {
  @operation({
    summary: "Get Hns",
  })
  @get()
  static getHns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hns",
  })
  @post("{id}")
  static createHns = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
