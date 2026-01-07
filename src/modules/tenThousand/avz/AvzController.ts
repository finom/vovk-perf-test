import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avz")
export default class AvzController {
  @operation({
    summary: "Get Avz",
  })
  @get()
  static getAvz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avz",
  })
  @post("{id}")
  static createAvz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
