import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sc")
export default class ScController {
  @operation({
    summary: "Get Sc",
  })
  @get()
  static getSc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sc",
  })
  @post("{id}")
  static createSc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
