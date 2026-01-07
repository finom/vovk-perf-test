import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axx")
export default class AxxController {
  @operation({
    summary: "Get Axx",
  })
  @get()
  static getAxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axx",
  })
  @post("{id}")
  static createAxx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
