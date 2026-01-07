import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyy")
export default class CyyController {
  @operation({
    summary: "Get Cyy",
  })
  @get()
  static getCyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyy",
  })
  @post("{id}")
  static createCyy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
