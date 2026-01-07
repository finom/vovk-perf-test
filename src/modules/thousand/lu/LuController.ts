import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lu")
export default class LuController {
  @operation({
    summary: "Get Lu",
  })
  @get()
  static getLu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lu",
  })
  @post("{id}")
  static createLu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
