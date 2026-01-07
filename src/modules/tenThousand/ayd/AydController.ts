import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayd")
export default class AydController {
  @operation({
    summary: "Get Ayd",
  })
  @get()
  static getAyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayd",
  })
  @post("{id}")
  static createAyd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
