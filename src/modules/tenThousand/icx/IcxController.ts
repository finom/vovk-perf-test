import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icx")
export default class IcxController {
  @operation({
    summary: "Get Icx",
  })
  @get()
  static getIcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icx",
  })
  @post("{id}")
  static createIcx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
