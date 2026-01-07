import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yf")
export default class YfController {
  @operation({
    summary: "Get Yf",
  })
  @get()
  static getYf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Yf",
  })
  @post("{id}")
  static createYf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
