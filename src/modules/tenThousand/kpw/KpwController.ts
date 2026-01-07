import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpw")
export default class KpwController {
  @operation({
    summary: "Get Kpw",
  })
  @get()
  static getKpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpw",
  })
  @post("{id}")
  static createKpw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
