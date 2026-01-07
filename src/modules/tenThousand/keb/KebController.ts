import { procedure, prefix, get, post, operation } from "vovk";

@prefix("keb")
export default class KebController {
  @operation({
    summary: "Get Keb",
  })
  @get()
  static getKeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Keb",
  })
  @post("{id}")
  static createKeb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
