import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbi")
export default class HbiController {
  @operation({
    summary: "Get Hbi",
  })
  @get()
  static getHbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbi",
  })
  @post("{id}")
  static createHbi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
