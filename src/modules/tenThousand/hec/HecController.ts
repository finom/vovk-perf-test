import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hec")
export default class HecController {
  @operation({
    summary: "Get Hec",
  })
  @get()
  static getHec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hec",
  })
  @post("{id}")
  static createHec = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
