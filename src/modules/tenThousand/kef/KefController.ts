import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kef")
export default class KefController {
  @operation({
    summary: "Get Kef",
  })
  @get()
  static getKef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kef",
  })
  @post("{id}")
  static createKef = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
