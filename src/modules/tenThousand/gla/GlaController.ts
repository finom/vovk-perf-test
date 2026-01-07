import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gla")
export default class GlaController {
  @operation({
    summary: "Get Gla",
  })
  @get()
  static getGla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gla",
  })
  @post("{id}")
  static createGla = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
