import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igk")
export default class IgkController {
  @operation({
    summary: "Get Igk",
  })
  @get()
  static getIgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igk",
  })
  @post("{id}")
  static createIgk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
