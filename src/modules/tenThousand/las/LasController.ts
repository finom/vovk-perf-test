import { procedure, prefix, get, post, operation } from "vovk";

@prefix("las")
export default class LasController {
  @operation({
    summary: "Get Las",
  })
  @get()
  static getLas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Las",
  })
  @post("{id}")
  static createLas = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
