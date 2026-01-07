import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myz")
export default class MyzController {
  @operation({
    summary: "Get Myz",
  })
  @get()
  static getMyz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myz",
  })
  @post("{id}")
  static createMyz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
