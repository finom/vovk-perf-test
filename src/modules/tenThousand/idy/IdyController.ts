import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idy")
export default class IdyController {
  @operation({
    summary: "Get Idy",
  })
  @get()
  static getIdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idy",
  })
  @post("{id}")
  static createIdy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
