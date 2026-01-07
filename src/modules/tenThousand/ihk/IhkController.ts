import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihk")
export default class IhkController {
  @operation({
    summary: "Get Ihk",
  })
  @get()
  static getIhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihk",
  })
  @post("{id}")
  static createIhk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
