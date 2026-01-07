import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eix")
export default class EixController {
  @operation({
    summary: "Get Eix",
  })
  @get()
  static getEix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eix",
  })
  @post("{id}")
  static createEix = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
