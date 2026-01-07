import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gii")
export default class GiiController {
  @operation({
    summary: "Get Gii",
  })
  @get()
  static getGii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gii",
  })
  @post("{id}")
  static createGii = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
