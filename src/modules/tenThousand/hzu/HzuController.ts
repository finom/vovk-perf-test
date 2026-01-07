import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzu")
export default class HzuController {
  @operation({
    summary: "Get Hzu",
  })
  @get()
  static getHzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzu",
  })
  @post("{id}")
  static createHzu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
