import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eum")
export default class EumController {
  @operation({
    summary: "Get Eum",
  })
  @get()
  static getEum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eum",
  })
  @post("{id}")
  static createEum = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
