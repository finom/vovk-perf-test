import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkg")
export default class MkgController {
  @operation({
    summary: "Get Mkg",
  })
  @get()
  static getMkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkg",
  })
  @post("{id}")
  static createMkg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
