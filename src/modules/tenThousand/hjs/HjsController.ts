import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjs")
export default class HjsController {
  @operation({
    summary: "Get Hjs",
  })
  @get()
  static getHjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjs",
  })
  @post("{id}")
  static createHjs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
