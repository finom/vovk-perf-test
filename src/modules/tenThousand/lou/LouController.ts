import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lou")
export default class LouController {
  @operation({
    summary: "Get Lou",
  })
  @get()
  static getLou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lou",
  })
  @post("{id}")
  static createLou = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
