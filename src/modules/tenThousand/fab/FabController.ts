import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fab")
export default class FabController {
  @operation({
    summary: "Get Fab",
  })
  @get()
  static getFab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fab",
  })
  @post("{id}")
  static createFab = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
