import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfl")
export default class KflController {
  @operation({
    summary: "Get Kfl",
  })
  @get()
  static getKfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfl",
  })
  @post("{id}")
  static createKfl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
