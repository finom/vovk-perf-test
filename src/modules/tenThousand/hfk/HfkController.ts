import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfk")
export default class HfkController {
  @operation({
    summary: "Get Hfk",
  })
  @get()
  static getHfk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfk",
  })
  @post("{id}")
  static createHfk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
