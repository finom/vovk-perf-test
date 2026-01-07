import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erk")
export default class ErkController {
  @operation({
    summary: "Get Erk",
  })
  @get()
  static getErk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erk",
  })
  @post("{id}")
  static createErk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
