import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqk")
export default class HqkController {
  @operation({
    summary: "Get Hqk",
  })
  @get()
  static getHqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqk",
  })
  @post("{id}")
  static createHqk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
