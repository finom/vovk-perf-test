import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kub")
export default class KubController {
  @operation({
    summary: "Get Kub",
  })
  @get()
  static getKub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kub",
  })
  @post("{id}")
  static createKub = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
