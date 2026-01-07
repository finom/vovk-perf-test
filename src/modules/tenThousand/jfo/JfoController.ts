import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfo")
export default class JfoController {
  @operation({
    summary: "Get Jfo",
  })
  @get()
  static getJfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfo",
  })
  @post("{id}")
  static createJfo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
