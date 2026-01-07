import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ige")
export default class IgeController {
  @operation({
    summary: "Get Ige",
  })
  @get()
  static getIge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ige",
  })
  @post("{id}")
  static createIge = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
