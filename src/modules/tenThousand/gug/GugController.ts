import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gug")
export default class GugController {
  @operation({
    summary: "Get Gug",
  })
  @get()
  static getGug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gug",
  })
  @post("{id}")
  static createGug = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
