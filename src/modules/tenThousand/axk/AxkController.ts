import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axk")
export default class AxkController {
  @operation({
    summary: "Get Axk",
  })
  @get()
  static getAxk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axk",
  })
  @post("{id}")
  static createAxk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
