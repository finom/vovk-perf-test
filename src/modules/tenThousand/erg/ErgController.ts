import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erg")
export default class ErgController {
  @operation({
    summary: "Get Erg",
  })
  @get()
  static getErg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erg",
  })
  @post("{id}")
  static createErg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
