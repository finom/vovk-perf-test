import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leh")
export default class LehController {
  @operation({
    summary: "Get Leh",
  })
  @get()
  static getLeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Leh",
  })
  @post("{id}")
  static createLeh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
