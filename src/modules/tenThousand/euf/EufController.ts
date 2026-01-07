import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euf")
export default class EufController {
  @operation({
    summary: "Get Euf",
  })
  @get()
  static getEuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Euf",
  })
  @post("{id}")
  static createEuf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
