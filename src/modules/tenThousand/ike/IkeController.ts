import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ike")
export default class IkeController {
  @operation({
    summary: "Get Ike",
  })
  @get()
  static getIke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ike",
  })
  @post("{id}")
  static createIke = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
