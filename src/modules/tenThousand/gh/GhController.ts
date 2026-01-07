import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gh")
export default class GhController {
  @operation({
    summary: "Get Gh",
  })
  @get()
  static getGh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gh",
  })
  @post("{id}")
  static createGh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
