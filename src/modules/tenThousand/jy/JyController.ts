import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jy")
export default class JyController {
  @operation({
    summary: "Get Jy",
  })
  @get()
  static getJy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jy",
  })
  @post("{id}")
  static createJy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
