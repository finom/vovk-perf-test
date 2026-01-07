import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwe")
export default class KweController {
  @operation({
    summary: "Get Kwe",
  })
  @get()
  static getKwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwe",
  })
  @post("{id}")
  static createKwe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
