import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guy")
export default class GuyController {
  @operation({
    summary: "Get Guy",
  })
  @get()
  static getGuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Guy",
  })
  @post("{id}")
  static createGuy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
