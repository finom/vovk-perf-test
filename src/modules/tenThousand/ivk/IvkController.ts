import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivk")
export default class IvkController {
  @operation({
    summary: "Get Ivk",
  })
  @get()
  static getIvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivk",
  })
  @post("{id}")
  static createIvk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
