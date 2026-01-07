import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arz")
export default class ArzController {
  @operation({
    summary: "Get Arz",
  })
  @get()
  static getArz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arz",
  })
  @post("{id}")
  static createArz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
