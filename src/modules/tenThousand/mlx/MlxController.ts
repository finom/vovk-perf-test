import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlx")
export default class MlxController {
  @operation({
    summary: "Get Mlx",
  })
  @get()
  static getMlx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlx",
  })
  @post("{id}")
  static createMlx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
