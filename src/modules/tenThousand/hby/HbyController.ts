import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hby")
export default class HbyController {
  @operation({
    summary: "Get Hby",
  })
  @get()
  static getHby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hby",
  })
  @post("{id}")
  static createHby = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
