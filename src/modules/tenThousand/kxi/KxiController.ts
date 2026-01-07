import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxi")
export default class KxiController {
  @operation({
    summary: "Get Kxi",
  })
  @get()
  static getKxi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxi",
  })
  @post("{id}")
  static createKxi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
