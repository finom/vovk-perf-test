import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afe")
export default class AfeController {
  @operation({
    summary: "Get Afe",
  })
  @get()
  static getAfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afe",
  })
  @post("{id}")
  static createAfe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
