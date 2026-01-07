import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpq")
export default class HpqController {
  @operation({
    summary: "Get Hpq",
  })
  @get()
  static getHpq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpq",
  })
  @post("{id}")
  static createHpq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
