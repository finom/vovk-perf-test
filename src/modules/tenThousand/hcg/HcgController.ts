import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcg")
export default class HcgController {
  @operation({
    summary: "Get Hcg",
  })
  @get()
  static getHcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcg",
  })
  @post("{id}")
  static createHcg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
