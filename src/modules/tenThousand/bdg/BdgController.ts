import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdg")
export default class BdgController {
  @operation({
    summary: "Get Bdg",
  })
  @get()
  static getBdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdg",
  })
  @post("{id}")
  static createBdg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
