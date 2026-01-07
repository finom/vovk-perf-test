import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koi")
export default class KoiController {
  @operation({
    summary: "Get Koi",
  })
  @get()
  static getKoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koi",
  })
  @post("{id}")
  static createKoi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
