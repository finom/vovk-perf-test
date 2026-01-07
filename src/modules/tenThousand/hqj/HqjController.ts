import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqj")
export default class HqjController {
  @operation({
    summary: "Get Hqj",
  })
  @get()
  static getHqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqj",
  })
  @post("{id}")
  static createHqj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
