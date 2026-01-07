import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jon")
export default class JonController {
  @operation({
    summary: "Get Jon",
  })
  @get()
  static getJon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jon",
  })
  @post("{id}")
  static createJon = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
