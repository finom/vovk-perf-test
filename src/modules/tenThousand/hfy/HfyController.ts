import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfy")
export default class HfyController {
  @operation({
    summary: "Get Hfy",
  })
  @get()
  static getHfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfy",
  })
  @post("{id}")
  static createHfy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
