import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zq")
export default class ZqController {
  @operation({
    summary: "Get Zq",
  })
  @get()
  static getZq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zq",
  })
  @post("{id}")
  static createZq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
