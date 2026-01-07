import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpb")
export default class HpbController {
  @operation({
    summary: "Get Hpb",
  })
  @get()
  static getHpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpb",
  })
  @post("{id}")
  static createHpb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
