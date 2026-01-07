import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mi")
export default class MiController {
  @operation({
    summary: "Get Mi",
  })
  @get()
  static getMi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mi",
  })
  @post("{id}")
  static createMi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
