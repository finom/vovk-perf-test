import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltt")
export default class LttController {
  @operation({
    summary: "Get Ltt",
  })
  @get()
  static getLtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltt",
  })
  @post("{id}")
  static createLtt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
