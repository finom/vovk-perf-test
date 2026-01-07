import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jiw")
export default class JiwController {
  @operation({
    summary: "Get Jiw",
  })
  @get()
  static getJiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jiw",
  })
  @post("{id}")
  static createJiw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
