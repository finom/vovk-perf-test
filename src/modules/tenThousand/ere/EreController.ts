import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ere")
export default class EreController {
  @operation({
    summary: "Get Ere",
  })
  @get()
  static getEre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ere",
  })
  @post("{id}")
  static createEre = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
