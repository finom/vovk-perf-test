import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ape")
export default class ApeController {
  @operation({
    summary: "Get Ape",
  })
  @get()
  static getApe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ape",
  })
  @post("{id}")
  static createApe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
