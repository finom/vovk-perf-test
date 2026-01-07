import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mse")
export default class MseController {
  @operation({
    summary: "Get Mse",
  })
  @get()
  static getMse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mse",
  })
  @post("{id}")
  static createMse = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
