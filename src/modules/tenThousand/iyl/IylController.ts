import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyl")
export default class IylController {
  @operation({
    summary: "Get Iyl",
  })
  @get()
  static getIyl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyl",
  })
  @post("{id}")
  static createIyl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
