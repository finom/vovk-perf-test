import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfe")
export default class HfeController {
  @operation({
    summary: "Get Hfe",
  })
  @get()
  static getHfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfe",
  })
  @post("{id}")
  static createHfe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
