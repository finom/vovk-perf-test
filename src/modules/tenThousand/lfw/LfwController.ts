import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfw")
export default class LfwController {
  @operation({
    summary: "Get Lfw",
  })
  @get()
  static getLfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfw",
  })
  @post("{id}")
  static createLfw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
