import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuw")
export default class FuwController {
  @operation({
    summary: "Get Fuw",
  })
  @get()
  static getFuw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuw",
  })
  @post("{id}")
  static createFuw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
