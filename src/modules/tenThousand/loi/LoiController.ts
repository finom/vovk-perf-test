import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loi")
export default class LoiController {
  @operation({
    summary: "Get Loi",
  })
  @get()
  static getLoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Loi",
  })
  @post("{id}")
  static createLoi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
