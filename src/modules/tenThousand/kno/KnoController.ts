import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kno")
export default class KnoController {
  @operation({
    summary: "Get Kno",
  })
  @get()
  static getKno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kno",
  })
  @post("{id}")
  static createKno = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
