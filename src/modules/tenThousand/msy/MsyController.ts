import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msy")
export default class MsyController {
  @operation({
    summary: "Get Msy",
  })
  @get()
  static getMsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msy",
  })
  @post("{id}")
  static createMsy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
