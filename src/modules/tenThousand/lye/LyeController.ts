import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lye")
export default class LyeController {
  @operation({
    summary: "Get Lye",
  })
  @get()
  static getLye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lye",
  })
  @post("{id}")
  static createLye = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
