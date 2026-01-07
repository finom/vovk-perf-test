import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdn")
export default class HdnController {
  @operation({
    summary: "Get Hdn",
  })
  @get()
  static getHdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdn",
  })
  @post("{id}")
  static createHdn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
