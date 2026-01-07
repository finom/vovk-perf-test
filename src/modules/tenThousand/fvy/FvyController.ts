import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvy")
export default class FvyController {
  @operation({
    summary: "Get Fvy",
  })
  @get()
  static getFvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvy",
  })
  @post("{id}")
  static createFvy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
