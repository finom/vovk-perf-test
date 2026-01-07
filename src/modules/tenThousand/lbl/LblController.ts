import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbl")
export default class LblController {
  @operation({
    summary: "Get Lbl",
  })
  @get()
  static getLbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbl",
  })
  @post("{id}")
  static createLbl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
