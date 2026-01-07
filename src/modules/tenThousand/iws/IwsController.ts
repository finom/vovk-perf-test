import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iws")
export default class IwsController {
  @operation({
    summary: "Get Iws",
  })
  @get()
  static getIws = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iws",
  })
  @post("{id}")
  static createIws = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
