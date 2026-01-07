import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aag")
export default class AagController {
  @operation({
    summary: "Get Aag",
  })
  @get()
  static getAag = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aag",
  })
  @post("{id}")
  static createAag = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
