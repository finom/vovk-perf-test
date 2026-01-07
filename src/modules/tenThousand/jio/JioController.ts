import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jio")
export default class JioController {
  @operation({
    summary: "Get Jio",
  })
  @get()
  static getJio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jio",
  })
  @post("{id}")
  static createJio = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
