import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsy")
export default class HsyController {
  @operation({
    summary: "Get Hsy",
  })
  @get()
  static getHsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsy",
  })
  @post("{id}")
  static createHsy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
