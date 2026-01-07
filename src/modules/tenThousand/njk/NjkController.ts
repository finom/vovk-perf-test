import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njk")
export default class NjkController {
  @operation({
    summary: "Get Njk",
  })
  @get()
  static getNjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Njk",
  })
  @post("{id}")
  static createNjk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
