import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muv")
export default class MuvController {
  @operation({
    summary: "Get Muv",
  })
  @get()
  static getMuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Muv",
  })
  @post("{id}")
  static createMuv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
