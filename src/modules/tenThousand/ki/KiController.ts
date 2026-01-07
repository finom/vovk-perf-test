import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ki")
export default class KiController {
  @operation({
    summary: "Get Ki",
  })
  @get()
  static getKi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ki",
  })
  @post("{id}")
  static createKi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
