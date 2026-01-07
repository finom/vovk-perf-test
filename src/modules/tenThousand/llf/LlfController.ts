import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llf")
export default class LlfController {
  @operation({
    summary: "Get Llf",
  })
  @get()
  static getLlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llf",
  })
  @post("{id}")
  static createLlf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
