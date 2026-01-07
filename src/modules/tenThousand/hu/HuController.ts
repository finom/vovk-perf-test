import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hu")
export default class HuController {
  @operation({
    summary: "Get Hu",
  })
  @get()
  static getHu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hu",
  })
  @post("{id}")
  static createHu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
