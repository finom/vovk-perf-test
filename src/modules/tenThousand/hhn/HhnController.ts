import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhn")
export default class HhnController {
  @operation({
    summary: "Get Hhn",
  })
  @get()
  static getHhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhn",
  })
  @post("{id}")
  static createHhn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
