import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyg")
export default class HygController {
  @operation({
    summary: "Get Hyg",
  })
  @get()
  static getHyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyg",
  })
  @post("{id}")
  static createHyg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
