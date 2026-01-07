import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ml")
export default class MlController {
  @operation({
    summary: "Get Ml",
  })
  @get()
  static getMl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ml",
  })
  @post("{id}")
  static createMl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
