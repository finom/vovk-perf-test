import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aom")
export default class AomController {
  @operation({
    summary: "Get Aom",
  })
  @get()
  static getAom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aom",
  })
  @post("{id}")
  static createAom = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
