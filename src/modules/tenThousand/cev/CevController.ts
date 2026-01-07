import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cev")
export default class CevController {
  @operation({
    summary: "Get Cev",
  })
  @get()
  static getCev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cev",
  })
  @post("{id}")
  static createCev = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
