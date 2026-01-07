import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hug")
export default class HugController {
  @operation({
    summary: "Get Hug",
  })
  @get()
  static getHug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hug",
  })
  @post("{id}")
  static createHug = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
