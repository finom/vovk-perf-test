import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npy")
export default class NpyController {
  @operation({
    summary: "Get Npy",
  })
  @get()
  static getNpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npy",
  })
  @post("{id}")
  static createNpy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
