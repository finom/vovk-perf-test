import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlk")
export default class MlkController {
  @operation({
    summary: "Get Mlk",
  })
  @get()
  static getMlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlk",
  })
  @post("{id}")
  static createMlk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
