import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llh")
export default class LlhController {
  @operation({
    summary: "Get Llh",
  })
  @get()
  static getLlh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llh",
  })
  @post("{id}")
  static createLlh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
