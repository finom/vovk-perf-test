import { procedure, prefix, get, post, operation } from "vovk";

@prefix("neo")
export default class NeoController {
  @operation({
    summary: "Get Neo",
  })
  @get()
  static getNeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Neo",
  })
  @post("{id}")
  static createNeo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
