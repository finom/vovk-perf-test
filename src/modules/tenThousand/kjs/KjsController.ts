import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjs")
export default class KjsController {
  @operation({
    summary: "Get Kjs",
  })
  @get()
  static getKjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjs",
  })
  @post("{id}")
  static createKjs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
