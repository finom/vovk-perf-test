import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cny")
export default class CnyController {
  @operation({
    summary: "Get Cny",
  })
  @get()
  static getCny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cny",
  })
  @post("{id}")
  static createCny = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
