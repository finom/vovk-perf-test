import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dod")
export default class DodController {
  @operation({
    summary: "Get Dod",
  })
  @get()
  static getDod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dod",
  })
  @post("{id}")
  static createDod = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
