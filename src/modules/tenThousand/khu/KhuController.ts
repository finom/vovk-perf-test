import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khu")
export default class KhuController {
  @operation({
    summary: "Get Khu",
  })
  @get()
  static getKhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khu",
  })
  @post("{id}")
  static createKhu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
