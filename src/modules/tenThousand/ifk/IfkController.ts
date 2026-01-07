import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifk")
export default class IfkController {
  @operation({
    summary: "Get Ifk",
  })
  @get()
  static getIfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifk",
  })
  @post("{id}")
  static createIfk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
