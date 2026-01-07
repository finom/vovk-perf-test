import { procedure, prefix, get, post, operation } from "vovk";

@prefix("as")
export default class AsController {
  @operation({
    summary: "Get As",
  })
  @get()
  static getAs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create As",
  })
  @post("{id}")
  static createAs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
