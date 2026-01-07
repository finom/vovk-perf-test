import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yz")
export default class YzController {
  @operation({
    summary: "Get Yz",
  })
  @get()
  static getYz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yz",
  })
  @post("{id}")
  static createYz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
