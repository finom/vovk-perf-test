import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpd")
export default class KpdController {
  @operation({
    summary: "Get Kpd",
  })
  @get()
  static getKpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpd",
  })
  @post("{id}")
  static createKpd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
