import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqg")
export default class HqgController {
  @operation({
    summary: "Get Hqg",
  })
  @get()
  static getHqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqg",
  })
  @post("{id}")
  static createHqg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
