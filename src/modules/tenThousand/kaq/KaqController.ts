import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kaq")
export default class KaqController {
  @operation({
    summary: "Get Kaq",
  })
  @get()
  static getKaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kaq",
  })
  @post("{id}")
  static createKaq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
