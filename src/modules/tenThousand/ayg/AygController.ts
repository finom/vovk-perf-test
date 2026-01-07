import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayg")
export default class AygController {
  @operation({
    summary: "Get Ayg",
  })
  @get()
  static getAyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayg",
  })
  @post("{id}")
  static createAyg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
