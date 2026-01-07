import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jim")
export default class JimController {
  @operation({
    summary: "Get Jim",
  })
  @get()
  static getJim = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jim",
  })
  @post("{id}")
  static createJim = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
