import { procedure, prefix, get, post, operation } from "vovk";

@prefix("le")
export default class LeController {
  @operation({
    summary: "Get Le",
  })
  @get()
  static getLe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Le",
  })
  @post("{id}")
  static createLe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
