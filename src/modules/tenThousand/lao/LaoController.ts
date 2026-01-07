import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lao")
export default class LaoController {
  @operation({
    summary: "Get Lao",
  })
  @get()
  static getLao = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lao",
  })
  @post("{id}")
  static createLao = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
