import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crx")
export default class CrxController {
  @operation({
    summary: "Get Crx",
  })
  @get()
  static getCrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crx",
  })
  @post("{id}")
  static createCrx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
