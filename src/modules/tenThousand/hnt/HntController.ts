import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnt")
export default class HntController {
  @operation({
    summary: "Get Hnt",
  })
  @get()
  static getHnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnt",
  })
  @post("{id}")
  static createHnt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
