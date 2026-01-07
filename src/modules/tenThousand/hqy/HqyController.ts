import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqy")
export default class HqyController {
  @operation({
    summary: "Get Hqy",
  })
  @get()
  static getHqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqy",
  })
  @post("{id}")
  static createHqy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
