import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fe")
export default class FeController {
  @operation({
    summary: "Get Fe",
  })
  @get()
  static getFe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fe",
  })
  @post("{id}")
  static createFe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
