import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcs")
export default class HcsController {
  @operation({
    summary: "Get Hcs",
  })
  @get()
  static getHcs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcs",
  })
  @post("{id}")
  static createHcs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
