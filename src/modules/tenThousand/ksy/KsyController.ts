import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksy")
export default class KsyController {
  @operation({
    summary: "Get Ksy",
  })
  @get()
  static getKsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksy",
  })
  @post("{id}")
  static createKsy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
