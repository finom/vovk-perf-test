import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrd")
export default class MrdController {
  @operation({
    summary: "Get Mrd",
  })
  @get()
  static getMrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrd",
  })
  @post("{id}")
  static createMrd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
