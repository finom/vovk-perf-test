import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lny")
export default class LnyController {
  @operation({
    summary: "Get Lny",
  })
  @get()
  static getLny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lny",
  })
  @post("{id}")
  static createLny = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
