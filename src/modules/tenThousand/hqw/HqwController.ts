import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqw")
export default class HqwController {
  @operation({
    summary: "Get Hqw",
  })
  @get()
  static getHqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqw",
  })
  @post("{id}")
  static createHqw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
