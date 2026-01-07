import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuh")
export default class KuhController {
  @operation({
    summary: "Get Kuh",
  })
  @get()
  static getKuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuh",
  })
  @post("{id}")
  static createKuh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
