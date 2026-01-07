import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvc")
export default class MvcController {
  @operation({
    summary: "Get Mvc",
  })
  @get()
  static getMvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvc",
  })
  @post("{id}")
  static createMvc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
