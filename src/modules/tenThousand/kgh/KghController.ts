import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgh")
export default class KghController {
  @operation({
    summary: "Get Kgh",
  })
  @get()
  static getKgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgh",
  })
  @post("{id}")
  static createKgh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
