import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jod")
export default class JodController {
  @operation({
    summary: "Get Jod",
  })
  @get()
  static getJod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jod",
  })
  @post("{id}")
  static createJod = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
