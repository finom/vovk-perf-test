import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvy")
export default class GvyController {
  @operation({
    summary: "Get Gvy",
  })
  @get()
  static getGvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvy",
  })
  @post("{id}")
  static createGvy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
