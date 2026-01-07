import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asu")
export default class AsuController {
  @operation({
    summary: "Get Asu",
  })
  @get()
  static getAsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asu",
  })
  @post("{id}")
  static createAsu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
