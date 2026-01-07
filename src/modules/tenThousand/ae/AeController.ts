import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ae")
export default class AeController {
  @operation({
    summary: "Get Ae",
  })
  @get()
  static getAe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ae",
  })
  @post("{id}")
  static createAe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
