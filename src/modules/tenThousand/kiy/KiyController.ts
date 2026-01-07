import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kiy")
export default class KiyController {
  @operation({
    summary: "Get Kiy",
  })
  @get()
  static getKiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kiy",
  })
  @post("{id}")
  static createKiy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
