import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gve")
export default class GveController {
  @operation({
    summary: "Get Gve",
  })
  @get()
  static getGve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gve",
  })
  @post("{id}")
  static createGve = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
