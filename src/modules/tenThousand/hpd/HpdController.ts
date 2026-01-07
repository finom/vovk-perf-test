import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpd")
export default class HpdController {
  @operation({
    summary: "Get Hpd",
  })
  @get()
  static getHpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpd",
  })
  @post("{id}")
  static createHpd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
