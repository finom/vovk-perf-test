import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecz")
export default class EczController {
  @operation({
    summary: "Get Ecz",
  })
  @get()
  static getEcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecz",
  })
  @post("{id}")
  static createEcz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
