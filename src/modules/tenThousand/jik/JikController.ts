import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jik")
export default class JikController {
  @operation({
    summary: "Get Jik",
  })
  @get()
  static getJik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jik",
  })
  @post("{id}")
  static createJik = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
