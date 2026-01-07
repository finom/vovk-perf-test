import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zf")
export default class ZfController {
  @operation({
    summary: "Get Zf",
  })
  @get()
  static getZf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zf",
  })
  @post("{id}")
  static createZf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
