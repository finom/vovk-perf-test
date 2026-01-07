import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clq")
export default class ClqController {
  @operation({
    summary: "Get Clq",
  })
  @get()
  static getClq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clq",
  })
  @post("{id}")
  static createClq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
