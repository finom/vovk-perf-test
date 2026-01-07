import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlk")
export default class NlkController {
  @operation({
    summary: "Get Nlk",
  })
  @get()
  static getNlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlk",
  })
  @post("{id}")
  static createNlk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
