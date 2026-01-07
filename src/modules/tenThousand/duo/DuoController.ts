import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duo")
export default class DuoController {
  @operation({
    summary: "Get Duo",
  })
  @get()
  static getDuo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duo",
  })
  @post("{id}")
  static createDuo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
