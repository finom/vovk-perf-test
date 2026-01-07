import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hog")
export default class HogController {
  @operation({
    summary: "Get Hog",
  })
  @get()
  static getHog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hog",
  })
  @post("{id}")
  static createHog = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
