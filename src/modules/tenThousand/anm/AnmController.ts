import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anm")
export default class AnmController {
  @operation({
    summary: "Get Anm",
  })
  @get()
  static getAnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anm",
  })
  @post("{id}")
  static createAnm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
