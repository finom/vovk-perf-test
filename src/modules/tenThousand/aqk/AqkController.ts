import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqk")
export default class AqkController {
  @operation({
    summary: "Get Aqk",
  })
  @get()
  static getAqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqk",
  })
  @post("{id}")
  static createAqk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
