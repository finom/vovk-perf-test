import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjo")
export default class KjoController {
  @operation({
    summary: "Get Kjo",
  })
  @get()
  static getKjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjo",
  })
  @post("{id}")
  static createKjo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
