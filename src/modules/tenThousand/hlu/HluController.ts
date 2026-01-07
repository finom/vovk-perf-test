import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlu")
export default class HluController {
  @operation({
    summary: "Get Hlu",
  })
  @get()
  static getHlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hlu",
  })
  @post("{id}")
  static createHlu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
