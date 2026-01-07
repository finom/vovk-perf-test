import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqu")
export default class CquController {
  @operation({
    summary: "Get Cqu",
  })
  @get()
  static getCqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqu",
  })
  @post("{id}")
  static createCqu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
