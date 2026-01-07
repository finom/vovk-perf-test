import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvk")
export default class HvkController {
  @operation({
    summary: "Get Hvk",
  })
  @get()
  static getHvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvk",
  })
  @post("{id}")
  static createHvk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
