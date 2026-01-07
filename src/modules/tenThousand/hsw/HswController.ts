import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsw")
export default class HswController {
  @operation({
    summary: "Get Hsw",
  })
  @get()
  static getHsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsw",
  })
  @post("{id}")
  static createHsw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
