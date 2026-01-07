import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lia")
export default class LiaController {
  @operation({
    summary: "Get Lia",
  })
  @get()
  static getLia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lia",
  })
  @post("{id}")
  static createLia = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
