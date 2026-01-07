import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mls")
export default class MlsController {
  @operation({
    summary: "Get Mls",
  })
  @get()
  static getMls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mls",
  })
  @post("{id}")
  static createMls = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
