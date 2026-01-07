import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bog")
export default class BogController {
  @operation({
    summary: "Get Bog",
  })
  @get()
  static getBog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bog",
  })
  @post("{id}")
  static createBog = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
