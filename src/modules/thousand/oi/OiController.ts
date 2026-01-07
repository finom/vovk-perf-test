import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oi")
export default class OiController {
  @operation({
    summary: "Get Oi",
  })
  @get()
  static getOi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Oi",
  })
  @post("{id}")
  static createOi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
