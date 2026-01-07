import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzz")
export default class KzzController {
  @operation({
    summary: "Get Kzz",
  })
  @get()
  static getKzz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzz",
  })
  @post("{id}")
  static createKzz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
