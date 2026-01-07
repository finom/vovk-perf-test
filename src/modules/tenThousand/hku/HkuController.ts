import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hku")
export default class HkuController {
  @operation({
    summary: "Get Hku",
  })
  @get()
  static getHku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hku",
  })
  @post("{id}")
  static createHku = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
