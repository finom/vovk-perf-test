import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jky")
export default class JkyController {
  @operation({
    summary: "Get Jky",
  })
  @get()
  static getJky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jky",
  })
  @post("{id}")
  static createJky = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
