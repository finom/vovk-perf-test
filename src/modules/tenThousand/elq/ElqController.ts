import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elq")
export default class ElqController {
  @operation({
    summary: "Get Elq",
  })
  @get()
  static getElq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elq",
  })
  @post("{id}")
  static createElq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
