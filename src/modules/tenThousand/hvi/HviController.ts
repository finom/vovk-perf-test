import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvi")
export default class HviController {
  @operation({
    summary: "Get Hvi",
  })
  @get()
  static getHvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvi",
  })
  @post("{id}")
  static createHvi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
