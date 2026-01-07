import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqg")
export default class LqgController {
  @operation({
    summary: "Get Lqg",
  })
  @get()
  static getLqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqg",
  })
  @post("{id}")
  static createLqg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
