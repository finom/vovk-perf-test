import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arl")
export default class ArlController {
  @operation({
    summary: "Get Arl",
  })
  @get()
  static getArl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arl",
  })
  @post("{id}")
  static createArl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
