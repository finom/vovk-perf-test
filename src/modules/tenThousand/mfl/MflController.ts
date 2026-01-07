import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfl")
export default class MflController {
  @operation({
    summary: "Get Mfl",
  })
  @get()
  static getMfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfl",
  })
  @post("{id}")
  static createMfl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
