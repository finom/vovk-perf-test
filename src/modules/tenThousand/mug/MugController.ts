import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mug")
export default class MugController {
  @operation({
    summary: "Get Mug",
  })
  @get()
  static getMug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mug",
  })
  @post("{id}")
  static createMug = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
