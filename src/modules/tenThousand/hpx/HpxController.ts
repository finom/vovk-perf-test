import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpx")
export default class HpxController {
  @operation({
    summary: "Get Hpx",
  })
  @get()
  static getHpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpx",
  })
  @post("{id}")
  static createHpx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
