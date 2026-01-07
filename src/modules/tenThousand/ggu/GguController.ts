import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggu")
export default class GguController {
  @operation({
    summary: "Get Ggu",
  })
  @get()
  static getGgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggu",
  })
  @post("{id}")
  static createGgu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
