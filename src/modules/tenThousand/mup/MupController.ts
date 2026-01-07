import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mup")
export default class MupController {
  @operation({
    summary: "Get Mup",
  })
  @get()
  static getMup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mup",
  })
  @post("{id}")
  static createMup = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
