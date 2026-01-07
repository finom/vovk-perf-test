import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hss")
export default class HssController {
  @operation({
    summary: "Get Hss",
  })
  @get()
  static getHss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hss",
  })
  @post("{id}")
  static createHss = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
