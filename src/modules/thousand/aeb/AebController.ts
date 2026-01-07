import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aeb")
export default class AebController {
  @operation({
    summary: "Get Aeb",
  })
  @get()
  static getAeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aeb",
  })
  @post("{id}")
  static createAeb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
