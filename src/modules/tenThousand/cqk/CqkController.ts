import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqk")
export default class CqkController {
  @operation({
    summary: "Get Cqk",
  })
  @get()
  static getCqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqk",
  })
  @post("{id}")
  static createCqk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
