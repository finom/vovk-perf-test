import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mht")
export default class MhtController {
  @operation({
    summary: "Get Mht",
  })
  @get()
  static getMht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mht",
  })
  @post("{id}")
  static createMht = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
